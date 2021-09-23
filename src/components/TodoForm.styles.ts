import styled from 'styled-components'

export const Wrapper = styled.div`
	form {
		margin-bottom: 32px;
		user-select: none;
	}

	input {
		padding: 14px 32px 14px 16px;
		border-radius: 4px 0 0 4px;
		border: 2px solid var(--medGrey);
		outline: none;
		width: 300px;
		background: #3c3c3c;
		color: var(--white);
		font-size: 1.2rem;
	}

	button {
		padding: 16px;
		border: none;
		border-radius: 0 4px 4px 0;
		cursor: pointer;
		outline: none;
		background: var(--medGrey);
		color: var(--white);
		font-size: 1.2rem;
	}
`
