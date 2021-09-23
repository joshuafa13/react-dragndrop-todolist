type Todo = {
	id: number
	text: string
	complete: boolean
}

type ToggleComplete = (selectedTodo: Todo) => void

type AddTodo = (newTodo: string) => void
