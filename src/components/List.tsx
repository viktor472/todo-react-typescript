import TodoList from "../models/todo";
import { OneList } from "./OneList";
import "./list.css";

interface IList {
  done: boolean;
  id: number;
  task: string;
  handleToggle: (id: number) => void;
  deleteTaskHandeler: (id: number) => void;
}
export const List = ({
  done,
  id,
  task,
  handleToggle,
  deleteTaskHandeler,
}: IList) => {
  return (
    <>
      <ul className="list-item">
        <OneList
          key={id}
          done={done}
          id={id}
          task={task}
          handleToggle={handleToggle}
          deleteTaskHandeler={deleteTaskHandeler}
        ></OneList>
      </ul>
    </>
  );
};
