export default (state, action) => {
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
