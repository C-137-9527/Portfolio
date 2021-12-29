import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

import TransitionGroup from "react-transition-group/TransitionGroup";
import { CSSTransition } from "react-transition-group";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <TransitionGroup component="ul">
      {todosCtx.items.map((item) => (
        <CSSTransition key={item.id} classNames="fade" timeout={300}>
          <TodoItem
            text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default Todos;
