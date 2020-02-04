const initialState = {
	todos: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, { id: state.todos.length + 1, text: action.payload }]
			};
		case 'REMOVE_TODO':
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload)
			};
		case 'UPDATE_TODO':
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
				)
			};
		case 'CLEAR_TODO':
			return {
				...state,
				todos: []
			};
		default:
			return state;
	}
};

export const addTodo = todo => ({
	type: 'ADD_TODO',
	payload: todo
});

export const clearTodos = () => ({
	type: 'CLEAR_TODO'
});

export const updateTodo = todo => ({
	type: 'UPDATE_TODO',
	payload: todo
});

export const removeTodo = id => ({
	type: 'REMOVE_TODO',
	payload: id
});
