import { nanoid } from "nanoid";
//action value
const CREATE_TODO = "todos/CREATE_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const READ_TODO = "todos/READ_TODO";
const UPDATE_TODO = "todos/UPDATE_TODO";

// action creator
export const addList = (payload) => {
  return {
    type: CREATE_TODO,
    payload,
  };
};

export const deleteList = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const readList = (payload) => {
  return {
    type: READ_TODO,
    payload,
  };
};
export const updateList = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

// reducer

const initialState = {
  todos: [
    {
      id: nanoid(),
      order: 1,
      title: "1",
      content: "1",
      isDone: false,
    },
  ],
};

const todoList = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case CREATE_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
          todo.isDone = !todo.isDone;
          return todo;
        }),
      };

    default:
      return state;
  }
};
export default todoList;
