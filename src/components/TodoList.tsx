import React, { useState } from 'react'
import { TodoListItem } from './TodoListItem'
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
	return (
		<>
			<h1>Todo List</h1>
			<ul>
				{todos.map((todo) => (
					<TodoListItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
				))}
			</ul>
		</>
	)
}
