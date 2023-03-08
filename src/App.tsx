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
  //send in task to thew handeler wich comes from Form
  const newTaskHandler = (task: string) => {
    //asign the apropriate values from the Todolist model
    const newTask = new TodoList(task, false);
    //set the task in array
    setTask((currentTasks) => {
      return currentTasks.concat(newTask);
    });
  };
  //------------Delete a new task------------
  //send in the id of the cliked list element
  const deleteTaskHandeler = (Id: number) => {
    //remove the iteme from the array
    setTask((currentTasks) => {
      //if the id is the same as cliked id set to false
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
        <div className="container">
          <Form addtask={newTaskHandler} task={task}></Form>
          {mapedList}
        </div>
      </div>
    </>
  );
}

export default App;
