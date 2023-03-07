class TodoList {
  id: number;
  task: string;
  done: boolean;

  constructor(task: string, done: boolean) {
    this.id = Math.random();
    this.task = task;
    this.done = done;
  }
}

export default TodoList;
