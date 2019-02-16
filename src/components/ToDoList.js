import React, { useContext } from 'react';
import { TodosDispatch } from '../App';

export default function ToDoList({ todos }) {
	const dispatch = useContext(TodosDispatch);

	const handleDelete = (index) => {
		dispatch({ type: 'REMOVE_TODO', payload: index });
	};

	const handleToggleCompleted = (index) => {
		dispatch({ type: 'TOGGLE_COMPLETED', payload: index });
	};

	return (
		<div>
			{todos.map((item, index) => {
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
}
