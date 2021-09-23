import React, { useState } from 'react'
import { UpdateTodoForm } from './UpdateTodoForm'
// Styles
import { Wrapper, Label, Icon } from './TodoListItem.styles'
// Icons
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
// Beautiful DND
import { Draggable } from 'react-beautiful-dnd'

interface TodoListItemProps {
	todo: Todo
	toggleComplete: ToggleComplete
	deleteTodo: DeleteTodo
	updateTodo: UpdateTodo
	index: number
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete, deleteTodo, updateTodo, index }) => {
	const [todoEditing, setTodoEditing] = useState<number | null>(null)
	// Update editing state (updating: todo.id, not updating: null)
	const completeEdit: CompleteEdit = () => {
		setTodoEditing(null)
	}

	return (
		<Wrapper>
			<Draggable draggableId={String(todo.id)} index={index}>
				{(provided, snapshot) => (
					<li
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						className={`${todo.complete ? 'transparent' : ''} ${todoEditing ? 'edit' : ''} ${
							snapshot.isDragging ? 'isDragging' : ''
						}`}>
						<Label>
							{todoEditing ? (
								<UpdateTodoForm id={todo.id} completeEdit={completeEdit} updateTodo={updateTodo} todo={todo} />
							) : (
								<>
									<div className='todo-index'>{`${index + 1} |`}</div>
									<div className={todo.complete ? 'complete' : ''} onClick={() => toggleComplete(todo)}>
										{todo.text}
									</div>
								</>
							)}
						</Label>
						<Icon>
							{todoEditing ? null : (
								<>
									<TiEdit className='edit-icon' onClick={() => setTodoEditing(todo.id)} />
									<RiCloseCircleLine className='delete-icon' onClick={() => deleteTodo(todo)} />
								</>
							)}
						</Icon>
					</li>
				)}
			</Draggable>
		</Wrapper>
	)
}
