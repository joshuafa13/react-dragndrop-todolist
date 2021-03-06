import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react'
//Style
import { Wrapper } from './AddTodoForm.styles'

interface AddTodoFormProps {
	addTodo: AddTodo
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
	const [newTodo, setNewTodo] = useState('')
	// Focus add todo input field
	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus()
	})
	// Controlled input component
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value)
	}
	// Add new Todo
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		addTodo(newTodo)
		setNewTodo('')
	}

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<input type='text' value={newTodo} placeholder='Enter your todo' onChange={handleChange} ref={inputRef} />
				<button type='submit'>Add Todo</button>
			</form>
		</Wrapper>
	)
}
