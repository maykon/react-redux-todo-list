import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, removeTodo } from '../../store/reducers/Todo';

const ItemTodo = ({ todo }) => {
	const dispatch = useDispatch();

	const onUpdateTodo = useCallback(() => {
		const text = prompt('Atualize o todo:', todo.text);
		dispatch(updateTodo({ ...todo, text }));
	}, [dispatch, todo]);

	const onRemoveTodo = useCallback(() => dispatch(removeTodo(todo.id)), [dispatch, todo]);

	return (
		<li>
			{todo.text}
			<span style={{ marginLeft: 10 }}>
				<button type="button" onClick={onUpdateTodo}>
					Atualizar
				</button>
				<button type="button" onClick={onRemoveTodo}>
					Remover
				</button>
			</span>
		</li>
	);
};

export default ItemTodo;
