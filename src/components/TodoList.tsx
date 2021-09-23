import React, { useState, useEffect } from 'react'
import { TodoListItem } from './TodoListItem'
import { AddTodoForm } from './AddTodoForm'
import { initialTodos } from '../initialTodos'
// Beautiful DND library
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export const TodoList: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>(initialTodos)
	// Store & load Todo data in localStorage
	useEffect(() => {
		const temp = localStorage.getItem('todos')
		const loadedTodos = JSON.parse(temp)
		if (loadedTodos) {
			setTodos(loadedTodos)
		}
	}, [])
	useEffect(() => {
		const temp = JSON.stringify(todos)
		localStorage.setItem('todos', temp)
	}, [todos])
	// Complete state toggle
	const toggleComplete: ToggleComplete = (selectedTodo) => {
		const updateTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return { ...todo, complete: !todo.complete }
			}
			return todo
		})
		setTodos(updateTodos)
	}
	// Add new Todo
	const addTodo: AddTodo = (newTodo) => {
		newTodo.trim().length !== 0 &&
			setTodos((prevState) => [{ id: Math.floor(Math.random() * 10000), text: newTodo, complete: false }, ...prevState])
	}
	// Edit existing Todo
	const updateTodo: UpdateTodo = (selectedId, newValue) => {
		if (newValue.trim() === '') {
			return
		}
		const updatedTodos = todos.map((todo) => {
			if (todo.id === selectedId) {
				return { ...todo, text: newValue }
			}
			return todo
		})
		setTodos(updatedTodos)
	}
	// Delete Todo
	const deleteTodo: DeleteTodo = (selectedTodo) => {
		const updatedTodos = todos.filter((todo) => todo !== selectedTodo)
		setTodos(updatedTodos)
	}
	// Drag and Drop Feature
	const handleOnDragEnd = (result: any) => {
		if (!result.destination) {
			return
		}
		const prevTodos = Array.from(todos)
		const [reorderedTodo] = prevTodos.splice(result.source.index, 1)
		prevTodos.splice(result.destination.index, 0, reorderedTodo)
		setTodos(prevTodos)
	}

	return (
		<>
			<h1>Todo List</h1>
			<AddTodoForm addTodo={addTodo} />
			<DragDropContext onDragEnd={handleOnDragEnd}>
				<Droppable droppableId='todos'>
					{(provided) => (
						<ul {...provided.droppableProps} ref={provided.innerRef}>
							{todos.map((todo, index) => (
								<TodoListItem
									key={todo.id}
									todo={todo}
									toggleComplete={toggleComplete}
									deleteTodo={deleteTodo}
									updateTodo={updateTodo}
									index={index}
								/>
							))}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
			</DragDropContext>
		</>
	)
}
