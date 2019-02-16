export default (state, action) => {
	switch (action.type) {
		case 'CLEAR_HEADER_ERROR':
			return {
				...state,
				header: ''
			};
		case 'CLEAR_FORM_ERROR':
			return {
				...state,
				form: ''
			};
		case 'FETCH_HEADER_ERROR':
			return {
				...state,
				header: action.payload
			};
		case 'FETCH_FORM_ERROR':
			return {
				...state,
				form: action.payload
			};
		default:
			return state;
	}
};
