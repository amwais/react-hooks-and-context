import React, { useReducer } from 'react';
import { initialTodos, initialErrors } from './initialStates';
import Header from './components/Header';
import AddToDoForm from './components/AddToDoForm';
import ToDoList from './components/ToDoList';
import ErrorButtons from './components/ErrorButtons';
import todoReducer from './reducers/todoReducer';
import errorReducer from './reducers/errorReducer';
import './App.css';

export const TodosDispatch = React.createContext(null);
export const ErrorsContext = React.createContext(null);

const App = () => {
	const [ todos, todosDispatch ] = useReducer(todoReducer, initialTodos);
	const [ errors, errorDispatch ] = useReducer(errorReducer, initialErrors);

	return (
		<div className="App">
			<TodosDispatch.Provider value={todosDispatch}>
				<ErrorsContext.Provider value={[ errors, errorDispatch ]}>
					<Header />
					<AddToDoForm />
				</ErrorsContext.Provider>
				<ToDoList todos={todos} />
				<ErrorsContext.Provider value={errorDispatch}>
					<ErrorButtons />
				</ErrorsContext.Provider>
			</TodosDispatch.Provider>
		</div>
	);
};

export default App;
