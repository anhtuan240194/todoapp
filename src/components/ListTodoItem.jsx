import { FormControlLabel, Checkbox } from "@mui/material";
export default function ListTodoItem({ todos, checkTodoItem, removeTodo }) {
  const items = todos.map((todo) => (
    <div className="item_list_todos" key={todo.id} id={todo.id}>
      <FormControlLabel
        className="item-todo"
        control={<Checkbox />}
        label={todo.title}
        checked={todo.completed}
        onChange={(e) => {
          checkTodoItem(e.target);
        }}
      />
      <div
        className="remove_todo"
        onClick={(e) => {
          removeTodo(e.target);
        }}
      >
        Xóa
      </div>
    </div>
  ));
  return <>{items}</>;
}
