import React, { useContext } from 'react';
import { ErrorsContext } from '../App';

export default function Header() {
	const [ { header }, errorDispatch ] = useContext(ErrorsContext);
	return (
		<div>
			{header && (
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<button style={{ margin: '10px' }} onClick={() => errorDispatch({ type: 'CLEAR_HEADER_ERROR' })}>
						Clear
					</button>
					<h4 style={{ color: 'red' }}>{header}</h4>
				</div>
			)}
			<h1>To Do App with React Hooks & Context</h1>
			<hr style={{ width: '75%' }} />
			<br />
		</div>
	);
}
