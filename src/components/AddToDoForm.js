import React, { useState, useContext } from 'react';
import { TodosDispatch } from '../App';

export default function AddToDoForm() {
	const dispatch = useContext(TodosDispatch);
	const handleAddToDo = (e) => {
		e.preventDefault();
		if (textField.length > 0) {
			dispatch({ type: 'ADD_TODO', payload: textField });
			setTextField('');
		}
	};
	const [ textField, setTextField ] = useState('');
	return (
		<div>
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
		</div>
	);
}
