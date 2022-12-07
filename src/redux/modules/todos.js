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
    {
      id: nanoid(),
      order: 2,
      title: "2",
      content: "2",
      isDone: false,
    },
    {
      id: nanoid(),
      order: 3,
      title: "3",
      content: "3",
      isDone: false,
    },
  ],
  detail: [],
};

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            // todos의리스트와 payload의 id가 같지 않을 때 객체리스트들을 그냥 반환한다.
            return todo;
          } else {
            todo.isDone = !todo.isDone;
            //todos의 리스트와 payload의 id가 같을 때 그 객체리스트의 isDone을 반대로 값을 바꿔준다.
            return todo;
          }
        }),
      };
    case READ_TODO:
      console.log(state.detail);
      return {
        ...state,
        detail: state.todos.filter((item) => {
          return item.id === action.payload;
        }),
      };

    default:
      return state;
  }
};
export default todoList;
