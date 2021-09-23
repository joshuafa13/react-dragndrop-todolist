import styled from 'styled-components'

export const Wrapper = styled.div`
	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 4px auto;
		color: var(--white);
		background: var(--lightGrey);
		padding: 16px;
		border-radius: 5px;
		width: 90%;
		font-size: 1.2rem;
	}

	span {
		cursor: pointer;
		user-select: none;
	}

	.complete {
		text-decoration: line-through;
		opacity: 0.6;
	}
`
