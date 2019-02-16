import React, { useReducer } from 'react';
import Header from './components/Header';
import AddToDoForm from './components/AddToDoForm';
import ToDoList from './components/ToDoList';
import './App.css';

const appReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [ ...state, { text: action.payload } ];
		case 'REMOVE_TODO':
			return state.filter((_, index) => index !== action.payload);
		case 'TOGGLE_COMPLETED':
			return state.map((item, index) => {
				if (action.payload === index) {
					return {
						...item,
						completed: !item.completed
					};
				}
				return item;
			});
		default:
			return state;
	}
};
export const TodosDispatch = React.createContext(null);

const App = () => {
	const initialState = [
		{
			text: 'Eat Dinner',
			completed: false
		}
	];

	const [ state, dispatch ] = useReducer(appReducer, initialState);

	return (
		<div className="App">
			<TodosDispatch.Provider value={dispatch}>
				<Header />
				<AddToDoForm />
				<ToDoList todos={state} />
			</TodosDispatch.Provider>
		</div>
	);
};

export default App;
