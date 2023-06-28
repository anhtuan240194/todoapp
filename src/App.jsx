import InputAddTodo from "./components/InputAddTodo.jsx";
import FilterTodo from "./components/FilterTodo.jsx";
import ListTodoItem from "./components/ListTodoItem.jsx";
import FooterTodo from "./components/FooterTodo.jsx";
import {useState} from "react"

//Main
export function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Công việc 1",
      completed: true
    },
    {
      id: 2,
      title: "Công việc 2",
      completed: false
    }
  ]);
  function filterTodos(){

  }
  function onSubmit(input){
    const newTodos = [...todos, {id:todos.length + 1, title:input, completed: false} ];
    setTodos(newTodos);
    console.log(newTodos)
  }
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <InputAddTodo onSubmit={onSubmit} />
      <FilterTodo />
      <ListTodoItem todos={filterTodos} />
      <FooterTodo />
    </div>
  );
}
