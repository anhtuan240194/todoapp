import InputAddTodo from "./components/InputAddTodo.jsx";
import FilterTodo from "./components/FilterTodo.jsx";
import ListTodoItem from "./components/ListTodoItem.jsx";
import FooterTodo from "./components/FooterTodo.jsx";
import "./index.css";

//Main
export function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <InputAddTodo />
      <FilterTodo />
      <ListTodoItem />
      <FooterTodo/>
    </div>
  );
}
