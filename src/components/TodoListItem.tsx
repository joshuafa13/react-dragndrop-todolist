import React, { useState } from 'react'
import { UpdateTodoForm } from './UpdateTodoForm'
import { Wrapper, Icon } from './TodoListItem.styles'
// Icons
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

interface TodoListItemProps {
	todo: Todo
	toggleComplete: ToggleComplete
	deleteTodo: DeleteTodo
	updateTodo?: UpdateTodo
	completeEdit?: CompleteEdit
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete, deleteTodo, updateTodo }) => {
	const [todoEditing, setTodoEditing] = useState<number | null>(null)
	const completeEdit: CompleteEdit = () => {
		setTodoEditing(null)
	}

	return (
		<Wrapper>
			<li className={`${todo.complete ? 'complete' : ''} ${todoEditing ? 'edit' : ''}`}>
				<label>
					{todoEditing ? (
						<UpdateTodoForm id={todo.id} completeEdit={completeEdit} updateTodo={updateTodo} todo={todo} />
					) : (
						<span onClick={() => toggleComplete(todo)}>{todo.text}</span>
					)}
				</label>
				<Icon>
					{todoEditing ? null : (
						<>
							<TiEdit className='edit-icon' onClick={() => setTodoEditing(todo.id)} />
							<RiCloseCircleLine className='delete-icon' onClick={() => deleteTodo(todo)} />
						</>
					)}
				</Icon>
			</li>
		</Wrapper>
	)
}
