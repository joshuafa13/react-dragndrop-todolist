import React from 'react'
import { TodoList } from './components/TodoList'

const App: React.FC = () => {
	return (
		<React.Fragment>
			<div className='todo-app'>
				<TodoList />
			</div>
		</React.Fragment>
	)
}

export default App
