import React from 'react'
import { Wrapper, Icon } from './TodoListItem.styles'
// Icons
import { RiCloseCircleLine } from 'react-icons/ri'

interface TodoListItemProps {
	todo: Todo
	toggleComplete: ToggleComplete
	deleteTodo: DeleteTodo
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
	return (
		<Wrapper>
			<li className={todo.complete ? 'complete' : ''}>
				<label>
					<div onClick={() => toggleComplete(todo)}>{todo.text}</div>
				</label>
				<Icon>
					<RiCloseCircleLine className='delete-icon' onClick={() => deleteTodo(todo)} />
				</Icon>
			</li>
		</Wrapper>
	)
}
