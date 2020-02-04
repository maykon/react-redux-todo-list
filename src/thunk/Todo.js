import { changeTodoText } from '../store/reducers/Form';
import { addTodo } from '../store/reducers/Todo';

export const addTodoThunk = todo => {
	return (dispatch, getState) => {
		dispatch(addTodo(todo));
		console.log(getState().todos.todos);
		dispatch(changeTodoText(''));
	};
};
