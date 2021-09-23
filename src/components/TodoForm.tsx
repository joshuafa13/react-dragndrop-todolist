import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react'
//Style
import { Wrapper } from './TodoForm.styles'

interface TodoFormProps {
	addTodo: AddTodo
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
	const [newTodo, setNewTodo] = useState('')
	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value)
	}

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
