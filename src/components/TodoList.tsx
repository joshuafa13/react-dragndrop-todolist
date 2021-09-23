import React, { useState } from 'react'
import { TodoListItem } from './TodoListItem'
import { TodoForm } from './TodoForm'
import { initialTodos } from '../initialTodos'

export const TodoList: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>(initialTodos)
	const toggleComplete: ToggleComplete = (selectedTodo) => {
		const updateTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return { ...todo, complete: !todo.complete }
			}
			return todo
		})
		setTodos(updateTodos)
	}

	const addTodo: AddTodo = (newTodo) => {
		newTodo.trim().length !== 0 &&
			setTodos((prevState) => [{ id: Math.floor(Math.random() * 10000), text: newTodo, complete: false }, ...prevState])
	}

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

	const deleteTodo: DeleteTodo = (selectedTodo) => {
		setTodos((prevState) => prevState.filter((todo) => todo !== selectedTodo))
	}
	return (
		<>
			<h1>Todo List</h1>
			<TodoForm addTodo={addTodo} />
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
