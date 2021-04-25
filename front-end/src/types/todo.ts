import { ChangeEvent, FormEvent } from "react"



/**
 * @Todo { type }
 * type of one todo item
 */

export type Todo = {
  id: string
  task: string
  isCompleted: boolean
}

/**
 * @TodoProps { type }
 * type of todo props
 */

export type TodoProps = {
  todo: Todo
  handleCheckTodo: (id: string) => void
  handleDeleteTodo: (id: string) => void
}


/**
 * @AddTodoProps { type }
 * type of a todo that will be add and passed as props
 */

export type AddTodoProps = {
  task: string
  handleSubmitTodo: (e: FormEvent) => void
  handleChange: (e: ChangeEvent) => void
}