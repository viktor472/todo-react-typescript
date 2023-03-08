import { useState } from "react";
import { useRef } from "react";
interface IForm {
  addtask: (task: string) => void;
}
export const Form = ({ addtask }: IForm) => {
  const refInput = useRef<HTMLInputElement>(null);

  const Submit = (e: React.FormEvent) => {
    e.preventDefault();

    const input = refInput.current!.value.trim();

    addtask(input);
  };
  return (
    <>
      <h1>Todo list</h1>
      <form onSubmit={Submit}>
        <input ref={refInput} type="text" placeholder="Add new task..." />
        <button type="submit">Create</button>
      </form>
    </>
  );
};
