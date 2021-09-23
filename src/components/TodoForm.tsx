import React, { useState, ChangeEvent, FormEvent } from 'react'
//Style
import { Wrapper } from './TodoForm.styles'

interface TodoFormProps {
	addTodo: AddTodo
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
	const [newTodo, setNewTodo] = useState<string>('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value)
	}

	const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
		addTodo(newTodo)
		setNewTodo('')
	}

	return (
		<Wrapper>
			<form>
				<input type='text' value={newTodo} onChange={handleChange} />
				<button type='submit' onClick={handleSubmit}>
					Add Todo
				</button>
			</form>
		</Wrapper>
	)
}
