import { ReactComponent as PlusIcon } from "../assests/plus.svg";
import { AddTodoProps } from "../types/todo";

export const AddTodo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <form className='flex justify-between w-full' onSubmit={handleSubmitTodo}>
    <input
      type='text'
      name='task'
      value={task}
      className='flex-1 rounded shadow p-2 text-grey-dark mr-2'
      onChange={handleChange}
      placeholder='  Add a todo...'
    />
    <button type='submit' aria-label='Add todo'>
      <PlusIcon />
    </button>
  </form>
);
