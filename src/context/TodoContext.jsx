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
        todos: [...state.todos, newTodo],
      };
    }
    case "CHANGE_FILTER": {
      return {
        ...state,
        selectedFilterOption: action.payload.option,
      };
    }
    case "TOGGLE_STATUS": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }
    case "REMOVE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case "CLEAR_TODO": {
      return {
        ...state,
        todos: [],
      };
    }
    default: {
      return state;
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
  };

  const toggleStatus = (id) => {
    dispatch({
      type: "TOGGLE_STATUS",
      payload: { id },
    });
  };

  const removeTodo = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      payload:{id}
    })
  }

  const removeAllTodos = () => {
    dispatch({
      type:"CLEAR_TODO"
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
        toggleStatus,
        changeFilter,
        removeAllTodos,
        removeTodo,
        selectedFilterOption: state.selectedFilterOption
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
