import React, { useState, useEffect } from 'react'
import { TodoListItem } from './TodoListItem'
import { AddTodoForm } from './AddTodoForm'
import { initialTodos } from '../initialTodos'

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
		setTodos((prevState) => prevState.filter((todo) => todo !== selectedTodo))
	}
	return (
		<>
			<h1>Todo List</h1>
			<AddTodoForm addTodo={addTodo} />
			<ul>
				{todos.map((todo) => (
					<TodoListItem
						key={todo.id}
						todo={todo}
						toggleComplete={toggleComplete}
						deleteTodo={deleteTodo}
						updateTodo={updateTodo}
					/>
				))}
			</ul>
		</>
	)
}
