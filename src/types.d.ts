type Todo = {
	id: number
	text: string
	complete: boolean
}

type ToggleComplete = (selectedTodo: Todo) => void

type AddTodo = (newTodo: string) => void

type DeleteTodo = (selectedTodo: Todo) => void

type CompleteEdit = () => void

type UpdateTodo = (selectedId: number, newValue: string) => void
