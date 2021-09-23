import React from 'react'
import { Wrapper } from './TodoListItem.styles'

interface TodoListItemProps {
	todo: Todo
	toggleComplete: ToggleComplete
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete }) => {
	return (
		<Wrapper>
			<li className={todo.complete ? 'complete' : ''}>
				<label>
					<div onClick={() => toggleComplete(todo)}>{todo.text}</div>
				</label>
			</li>
		</Wrapper>
	)
}
