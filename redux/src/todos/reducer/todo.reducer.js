import { SatelliteTwoTone } from '@material-ui/icons';
import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/v4';

const initialState = [
    { id: 1, text: '리액트 학습', done: true },
    { id: 2, text: '리액트 학습', done: false },
];

// 기능: addTodo, todos, findTodo, editTodo, delTodo
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, { payload }) {
            console.log('payload.id = ' + JSON.stringify(payload.id));
            console.log('state = ' + JSON.stringify(state));
            console.log('payload = ' + payload);
            state.push({ id: uuid(), text: payload, done: false });
        },
        delTodo(state, { payload }) {
            state.splice(
                state.findIndex((j) => j.id === payload),
                1
            );
            //  return state.splice(state.findIndex(j => j.id === payload), 1)
            // return state.filter((el) => el.id !== payload)

            // state.indexOf(state[i].id, 1);
        },
        delTodos(state, { payload }) {
            alert(`리듀서 delAllTodo로 들어옴: 모든 게시물을 삭제합니다.`);
            state.splice(payload);
        },
        toggleTodo(state, { payload }) {
            alert(`리듀서 toggleTodo 들어옴`);
            // return (state.filter((todo) => todo.id === payload).done = true);
            const toggle = state.find((todo) => todo.id === payload);
            toggle.done = !toggle.done;
        },
    },
});
// alert(JSON.stringify(todoSlice));

// {"name":"todos","
// actions":{},"
// caseReducers":{}}
alert(`JSON.stringify(todoSlice)` + JSON.stringify(todoSlice));
const { actions, reducer } = todoSlice;
export const { addTodo, delTodo, delTodos, toggleTodo } = actions;
alert(`JSON.stringify(addTodo)` + JSON.stringify(addTodo));
alert(`addTodo = ` + addTodo);
alert(`JSON.stringify(delTodo)` + JSON.stringify(delTodo));
export default reducer;
