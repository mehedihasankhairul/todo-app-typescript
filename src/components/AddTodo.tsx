import { AddTodoProps } from "../types"
import { ReactComponent as PlusIcon } from "../images/image2vector (2).svg"

export const AddTodo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <>
    <h1 className="text-3xl my-3  font-extrabold text-blue-600"> List your task</h1>
    <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
      <input
        type="text"
        name="task"
        value={task}
        className="flex-1 responsive rounded shadow p-2 text-grey-dark mr-2"
        onChange={handleChange}
      />
      <button type="submit" aria-label="Add todo" className="text-indigo-50 font-extrabold text-3xl">
        <PlusIcon className="w-20" />
        Add
      </button>

    </form>
  </>
)