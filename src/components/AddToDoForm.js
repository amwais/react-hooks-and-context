import React, { useState, useContext } from 'react';
import { TodosDispatch, ErrorsContext } from '../App';

export default function AddToDoForm() {
	const dispatch = useContext(TodosDispatch);
	const [ { form }, errorDispatch ] = useContext(ErrorsContext);
	const [ textField, setTextField ] = useState('');

	const handleAddToDo = (e) => {
		e.preventDefault();
		if (textField.length > 0) {
			dispatch({ type: 'ADD_TODO', payload: textField });
			setTextField('');
		}
	};

	return (
		<div>
			{form && (
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<button style={{ margin: '10px' }} onClick={() => errorDispatch({ type: 'CLEAR_FORM_ERROR' })}>
						Clear
					</button>
					<h4 style={{ color: 'red' }}>{form}</h4>
				</div>
			)}
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
