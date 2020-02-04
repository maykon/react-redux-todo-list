import { createStore, combineReducers, compose } from 'redux';
import TodoReducer from './reducers/Todo';
import FormReducer from './reducers/Form';

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const reducers = combineReducers({
	todos: TodoReducer,
	form: FormReducer
});

const store = createStore(reducers, composeEnhancers());

export default store;
