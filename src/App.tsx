import { useState } from "react";
import "./App.css";
import TodoList from "./models/todo";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  const [task, setTask] = useState<TodoList[]>([]);

  //------Done togler-------
  //map all todos and then serch fore a id with the same id as the kliced id. And if so shange done to the opositre
  const handleToggle = (id: number) => {
    setTask(
      task.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  };
  //------------Add a new task------------
  const newTaskHandler = (task: string) => {
    const newTask = new TodoList(task, false);

    setTask((currentTasks) => {
      return currentTasks.concat(newTask);
    });
  };
  //------------Delete a new task------------
  const deleteTaskHandeler = (Id: number) => {
    setTask((currentTasks) => {
      return currentTasks.filter((task) => task.id !== Id);
    });
  };

  //-----------Map the tasks--------------
  const mapedList = task.map((c) => (
    <List
      done={c.done}
      id={c.id}
      task={c.task}
      handleToggle={handleToggle}
      deleteTaskHandeler={deleteTaskHandeler}
    ></List>
  ));

  return (
    <>
      <div className="App">
        <Form addtask={newTaskHandler}></Form>
        {mapedList}
      </div>
    </>
  );
}

export default App;
