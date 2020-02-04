import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import List from './components/List';
import Form from './components/Form';
import reduxStore from './store';

function App() {
	return (
		<ReduxProvider store={reduxStore}>
			<Form />
			<List />
		</ReduxProvider>
	);
}

export default App;
