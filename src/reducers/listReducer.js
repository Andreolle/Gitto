const initialState = {
	repoList: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'POST_ITEM':
			return action.payload
		default:
			return state
	}
}