import { FormControlLabel, Checkbox } from "@mui/material";
export default function ListTodoItem({ todos }) {
  const items = todos.map((todo) => (
    <FormControlLabel
      key={todo.id}
      className="item-todo"
      control={<Checkbox />}
      label={todo.title}
      checked={todo.completed}
    />
  ))
  return <>{items}</>;

}
