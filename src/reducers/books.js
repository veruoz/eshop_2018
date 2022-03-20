const initialState = {
    books: [{
        id: 0,
        title: 'Hello Oruel'
    }],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOK':
            return {
                ...state,
                books: action.payload
            }
        case 'ADD_BOOK':
            return {
                books: [
                    ...state.books,
                    action.payload
                ]
            }
        default:
            return state
    }
}
