import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    todosCtx.addTodo(enteredText);

    todoTextInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          ref={todoTextInputRef}
          placeholder="eg. run 1km"
          required
        />
        <button>add</button>
      </div>
    </form>
  );
};

export default NewTodo;
