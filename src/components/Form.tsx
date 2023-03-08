import { useState } from "react";
import { useRef } from "react";
import TodoList from "../models/todo";
import "./form.css";
interface IForm {
  addtask: (task: string) => void;
  task: TodoList[];
}

//---------------add task---------------
export const Form = ({ addtask, task }: IForm) => {
  const [eText, setEtext] = useState<string>("");
  //get form inputs and put in varieble (refInput)
  const refInput = useRef<HTMLInputElement>(null);

  //Submit funktion wich will be run when form submits it's data
  const Submit = (e: React.FormEvent) => {
    e.preventDefault();
    // get refInput accesible ass string
    const input = refInput.current!.value;
    const tasks = task.map;
    if (input == "") {
      setEtext("Not valid input");
    } else {
      setEtext("");
      addtask(input);
    }
    //send to addTask Handeler
  };
  return (
    <>
      <div className="form">
        <h1>Todo list</h1>
        <form onSubmit={Submit}>
          <input ref={refInput} type="text" placeholder="Add new task..." />
          <button type="submit">Create</button>
        </form>
        {eText}
      </div>
    </>
  );
};
