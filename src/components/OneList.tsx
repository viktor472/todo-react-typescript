import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
interface IOneList {
  done: boolean;
  id: number;
  task: string;
  handleToggle: (id: number) => void;
  deleteTaskHandeler: (id: number) => void;
}
export const OneList = ({
  done,
  id,
  task,
  handleToggle,
  deleteTaskHandeler,
}: IOneList) => {
  const trash = <FontAwesomeIcon icon={faTrashCan} />;

  return (
    <>
      <li
        onClick={() => handleToggle(id)}
        style={{ textDecoration: done ? "line-through" : "none" }}
      >
        {task}
      </li>
      <button onClick={() => deleteTaskHandeler(id)}>{trash}</button>
    </>
  );
};
