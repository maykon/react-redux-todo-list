const initialState = {
	todo: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_TEXT':
			return {
				...state,
				todo: action.payload
			};
		default:
			return state;
	}
};

export const changeTodoText = todo => ({
	type: 'CHANGE_TEXT',
	payload: todo
});
