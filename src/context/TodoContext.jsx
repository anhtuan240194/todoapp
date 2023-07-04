import { createContext, useReducer } from "react";

export const TodoContext = createContext();
// {todos: [], filterOption: ""}

// Reducer là hàm chứa tất cả logic cập nhật liên quan đến trạng thái todo
// State là giá trị trạng thái hiện tại
// Action là một hành động xảy ra => { type: "", payload: ... }
// {type: "LOGIN", payload: {username: "", password: ""}}
// {type: "POST_STATUS", payload: {content: "Hahahaha"}}
// {type: "LOGOUT"}

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_TODO": {
      const newTodo = {
        id: Date.now(),
        title: action.payload.input,
        status: false,
      };
      return { 
      ...state, 
      todos: [...state.todos, newTodo] };
    }
    case "CHANGE_FILTER" : {
      return {
        ...state,
        selectedFilterOption: action.payload.option
      };
    }
  }
};

export default function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    selectedFilterOption: "All",
  });
  const createTodo = (input) => {
    dispatch({
      type: "CREATE_TODO",
      payload: { input },
    });
  };

  const changeFilter = (option) => {
    dispatch({
      type: "CHANGE_FILTER",
      payload: {option}
    })
  }
  const filteredTodos = 
  state.selectedFilterOption === "All" 
  ? state.todos 
  : state.selectedFilterOption === "Final"
  ? state.todos.filter((todo) => todo.status)
  : state.todos.filter((todo) => !todo.status)

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        createTodo,
        changeFilter,
        selectedFilterOption: state.selectedFilterOption
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
