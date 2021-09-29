import styled from 'styled-components'

export const Wrapper = styled.div`
	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 4px auto;
		color: var(--white);
		background: linear-gradient(to bottom right, var(--medGrey), steelblue);
		padding: 16px;
		border-radius: 5px;
		width: 90%;
		font-size: 1.2rem;
	}
	li.edit {
		justify-content: center;
	}

	span {
		cursor: pointer;
		user-select: none;
	}

	.complete {
		text-decoration: line-through;
	}

	.transparent {
		opacity: 0.6;
	}

	.isDragging {
		background: rgb(140, 140, 173);
		opacity: 1;
	}
`

export const Label = styled.label`
	display: flex;
	align-items: center;
	.todo-index {
		margin-right: 20px;
		font-size: 30px;
		font-weight: 700;
	}
`

export const Icon = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	.delete-icon {
		margin-right: 5px;
		color: var(--white);
		font-size: 1.8rem;
	}

	.edit-icon {
		margin-right: 5px;
		color: var(--white);
		font-size: 1.8rem;
	}
`
