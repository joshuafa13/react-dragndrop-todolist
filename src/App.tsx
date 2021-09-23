import React from 'react'
import { TodoList } from './components/TodoList'
// Style
import { GlobalStyle } from './GlobalStyle'

const App: React.FC = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<div className='todo-app'>
				<TodoList />
			</div>
		</React.Fragment>
	)
}

export default App
