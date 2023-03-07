import { useState } from "react";
import "./App.css";
import TodoList from "./models/todo";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  const countriesPast = [
    new TodoList("Kina", false),
    new TodoList("USA", false),
    new TodoList("Spanien", false),
    new TodoList("Norge", false),
  ];

  const [task, setTask] = useState(countriesPast);

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

  //------------Delete a new task------------

  //-----------Map the tasks--------------
  const mapedList = task.map((c) => (
    <List
      done={c.done}
      id={c.id}
      task={c.task}
      handleToggle={handleToggle}
    ></List>
  ));

  return (
    <>
      <div className="App">
        <Form></Form>
        {mapedList}
      </div>
    </>
  );
}

export default App;
