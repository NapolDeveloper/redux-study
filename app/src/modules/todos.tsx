import { deprecated, createAction, ActionType, createReducer } from 'typesafe-actions';
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

let nextId = 1; // 고유 id

// action function
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text
  }
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id
});

// action type
type TodosAction = ReturnType<typeof addTodo> | ReturnType<typeof toggleTodo> | ReturnType<typeof removeTodo>;

// 상태에서 사용 할 할 일 항목 데이터
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];

const initialState: TodosState = [];

function todos(state: TodosState = initialState, action: TodosAction): TodosState {
  switch (action.type) {
    case ADD_TODO:
      // concat : Joins two or more arrays, and returns a copy of the joined arrays
      return state.concat({ id: action.payload.id, text: action.payload.text, done: false });
    case TOGGLE_TODO:
      // payload 가 number 인 것이 유추됩니다. << 왜 유추가 되는가
      // Creates a new array with the result of calling a function for each array element
      return state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
    case REMOVE_TODO:
      // filter : Creates a new array with every element in an array that pass a test
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;
