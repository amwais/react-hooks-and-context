import React, { useState, useContext } from 'react';
import { ErrorsContext } from '../App';

const errors = [ 'No Network Connection', '500 Internal server error', '404 Forbidden' ];

export default function ErrorButtons() {
	const dispatch = useContext(ErrorsContext);
	const [ loading, setLoading ] = useState(false);

	const fetchFakeError = (target) => {
		const fakeError = errors[Math.floor(Math.random() * errors.length)];
		let type;

		if (target === 'header') {
			type = 'FETCH_HEADER_ERROR';
		} else if (target === 'form') {
			type = 'FETCH_FORM_ERROR';
		}
		setLoading(true);
		setTimeout(() => {
			dispatch({
				type,
				payload: fakeError
			});
			setLoading(false);
		}, 500);
	};

	return (
		<div style={{ marginTop: '15px' }}>
			<button onClick={() => fetchFakeError('header')}>Generate Header Error</button>
			<button onClick={() => fetchFakeError('form')}>Generate Form Error</button>
			{loading && <h3>Fetching Data...</h3>}
		</div>
	);
}
