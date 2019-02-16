import React, { useReducer, useState } from 'react';
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

const App = () => {
	const [ textField, setTextField ] = useState('');
	const [ state, dispatch ] = useReducer(appReducer, [
		{
			text: 'Eat Dinner',
			completed: false
		}
	]);

	const handleAddToDo = (e) => {
		e.preventDefault();
		if (textField.length > 0) {
			dispatch({ type: 'ADD_TODO', payload: textField });
			setTextField('');
		}
	};

	const handleDelete = (index) => {
		dispatch({ type: 'REMOVE_TODO', payload: index });
	};

	const handleToggleCompleted = (index) => {
		dispatch({ type: 'TOGGLE_COMPLETED', payload: index });
	};

	return (
		<div className="App">
			<h1>To Do App with React Hooks & Context</h1>
			<hr style={{ width: '75%' }} />
			<br />
			<form onSubmit={handleAddToDo}>
				<input autoFocus type="text" value={textField} onChange={(e) => setTextField(e.target.value)} />
				<button
					style={{
						margin: '10px'
					}}
					onClick={handleAddToDo}
				>
					Add
				</button>
			</form>
			<br />
			{state.map((item, index) => {
				return (
					<div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<input type="checkbox" onChange={() => handleToggleCompleted(index)} checked={false} />
						<p
							style={{
								paddingLeft: '10px',
								paddingRight: '10px',
								textDecoration: item.completed ? 'line-through' : 'none'
							}}
						>
							{item.text}
						</p>
						<button onClick={() => handleDelete(index)}>Delete</button>
					</div>
				);
			})}
		</div>
	);
};

export default App;
