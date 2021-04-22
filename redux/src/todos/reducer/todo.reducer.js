import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    input: '',
    todos: [
        { id: 1, text: '리액트 학습', done: true },
        { id: 2, text: '리액트 학습', done: true },
    ],
};

const todoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        changeInput() {(state, {payload: input}) => {;return state;}},
        Insert() {(state, action) => {
            const {id, text} = action;
            state.todos.push({id, text, doen: faluse})
        }},
        toggle() {(state, action) => {
            const todo = state.todo.find(todo => todo.id === action.payload.id)
            if(todo){
                todo.done = Itodo.done
            }
        }},
        remove() {(state, action) => {
            const{id} = action
            const i = state.todos.fineIndex(todo => todo.id === id)
            state.todos.spliece(i, 1)
        },
    },
});
const { actions, reducers } = todoReducer;
export const { changeInput, Insert, toggle, remove } = actions;
export default reducers;
