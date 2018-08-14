const initialState = {
	item: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ITEM':
			return action.payload
		default:
			return state
	}
}