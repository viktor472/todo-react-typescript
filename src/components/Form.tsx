interface IForm {
  handleSubmit: () => void;
}
export const Form = () => {
  return (
    <>
      <h1>Todo list</h1>
      <form>
        <input type="text" placeholder="Add new task..." />
        <button type="submit">Create</button>
      </form>
    </>
  );
};
