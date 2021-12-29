const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <div className="todoItem">
      <li>{props.text}</li>
      <button onClick={props.onRemoveTodo}>remove</button>
    </div>
  );
};

export default TodoItem;
