import InputAddTodo from "./components/InputAddTodo.jsx";
import FilterTodo from "./components/FilterTodo.jsx";
import ListTodoItem from "./components/ListTodoItem.jsx";
import FooterTodo from "./components/FooterTodo.jsx";
import { useState } from "react";

//Main
export function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Công việc 1",
      completed: true,
    },
    {
      id: 2,
      title: "Công việc 2",
      completed: false,
    },
  ]);
  const [filter, setFilter] = useState("All");

  /**
   * @param {valueProps} value - là 1 chuỗi string truyền vào
   */
  function onChangeFilter(value) {
    setFilter(value);
  }

  /**
   * @typedef {string} valueInput - Là 1 chuỗi string
   */
  /**
   * Convert lại todo khi input submit
   * @param {valueInput} input - Giá trị nhập vào  ô input
   */
  function onSubmit(input) {
    const newTodos = [
      ...todos,
      { id: todos.length + 1, title: input, completed: false },
    ];
    setTodos(newTodos);
  }

  //Click filter => filter lại todos
  const filterTodos =
    filter === "All"
      ? todos
      : filter === "In active"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  //Checkbox todo item => Filter lại todo
  function checkTodoItem(item) {
    const id = item.closest(".item_list_todos").id;
    let newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id == id);
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  //Xóa item todo
  function removeTodo(item) {
    let newTodos = [...todos];
    const id = item.closest(".item_list_todos").id;
    const index = newTodos.findIndex((todo) => todo.id == id);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <InputAddTodo onSubmit={onSubmit} />
      <FilterTodo onChange={onChangeFilter} />
      <ListTodoItem
        todos={filterTodos}
        checkTodoItem={checkTodoItem}
        removeTodo={removeTodo}
      />
      <FooterTodo todos={todos} />
    </div>
  );
}
