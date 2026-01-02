import type { Todo } from '@/types/todo'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TodoState {
  todos: Todo[]
  isLoading:boolean
}

const initialState: TodoState = {
  todos: [],
  isLoading:true
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload
    },

    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [action.payload, ...state.todos]
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
    },

    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo)=>todo.id == action.payload.id ? action.payload : todo)
    },

    setIsLoading: (state, action: PayloadAction<boolean>) => {

      state.isLoading = action.payload;
    },


  },
})

// Action creators are generated for each case reducer function
export const { setTodos, addTodo, deleteTodo, updateTodo, setIsLoading } = todoSlice.actions

export default todoSlice.reducer