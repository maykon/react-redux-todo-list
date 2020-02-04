import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTodoText } from '../../store/reducers/Form';
import { addTodo, clearTodos } from '../../store/reducers/Todo';

const Form = () => {
	const dispatch = useDispatch();
	const { todo } = useSelector(state => state.form);

	const onChangeTodo = useCallback(({ target }) => dispatch(changeTodoText(target.value)), [dispatch]);
	const onAddTodo = useCallback(() => {
		dispatch(addTodo(todo));
		dispatch(changeTodoText(''));
	}, [dispatch, todo]);
	const onClearTodos = useCallback(() => dispatch(clearTodos()), [dispatch]);

	return (
		<form>
			<label htmlFor="todo">Todo:</label>
			<input type="text" name="todo" value={todo} onChange={onChangeTodo} />
			<button type="button" onClick={onAddTodo}>
				Adicionar
			</button>
			<button type="button" onClick={onClearTodos}>
				Limpar Lista
			</button>
		</form>
	);
};

export default Form;
