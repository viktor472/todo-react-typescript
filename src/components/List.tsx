import TodoList from "../models/todo";

interface IList {
  done: boolean;
  id: number;
  task: string;
  handleToggle: (id: number) => void;
}
export const List = ({ done, id, task, handleToggle }: IList) => {
  return (
    <>
      <ul>
        <li
          onClick={() => handleToggle(id)}
          style={{ textDecoration: done ? "line-through" : "none" }}
        >
          {task}
        </li>
        <button>Remove</button>
      </ul>
    </>
  );
};
