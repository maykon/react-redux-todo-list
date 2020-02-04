import React from 'react';
import { useSelector } from 'react-redux';
import ItemTodo from './ItemTodo';

const List = () => {
	const { todos } = useSelector(state => state.todos);

	return (
		<ul>
			{todos.map((todo, index) => (
				<ItemTodo key={index} todo={todo} />
			))}
		</ul>
	);
};

export default List;
