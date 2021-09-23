import React, { useState, FormEvent, ChangeEvent, useRef, useEffect } from 'react'
//Styles
import { Wrapper } from './UpdateTodoForm.styles'

interface UpdateTodoFormProps {
	id: number
	updateTodo: UpdateTodo
	completeEdit: CompleteEdit
	todo: Todo
}

export const UpdateTodoForm: React.FC<UpdateTodoFormProps> = ({ id, todo, updateTodo, completeEdit }) => {
	const [input, setInput] = useState(todo.text)
	// Focus update input field
	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus()
	})
	// Controlled update input component
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}
	// Update Todo
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		updateTodo(id, input)
		setInput('')
		completeEdit()
	}

	return (
		<Wrapper>
			<form onSubmit={handleSubmit} className='edit'>
				<input type='text' value={input} placeholder={todo.text} onChange={handleChange} ref={inputRef} />
				<button type='submit'>Update Todo</button>
			</form>
		</Wrapper>
	)
}
