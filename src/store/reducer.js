import { 
    SAVE_INITIAL_LIST_ACTION, 
    DELETE_BOOK_ACTION, 
    SAVE_BOOK_ACTION, 
    SET_SELECTED_BOOK_ACTION, 
    UPDATE_BOOK_ACTION,
    SHOW_MODAL_ADD_BOOK_ACTION,
    FILTER_BOOK_ACTION,
    SEARCH_QUERY_ACTION,
    ADD_AUTHOR_TO_LIST_ACTION,
    ADD_PROPERTY_TO_BOOK_LIST_ACTION
} from "./actions";

const initialState = {
    bookList: [],
    selectedBook: {
        id: '',
        title: '',
        author: '',
        description: '',
        photo: ''
    },
    visibleModalAddBook: false,
    searchValue: '',
    filterAuthorList: []
}

export default function (state = initialState, action) {
    switch(action.type) {

        case SAVE_INITIAL_LIST_ACTION:
            return {...state, bookList: action.payload}

        case DELETE_BOOK_ACTION:
            return {...state, bookList: state.bookList.filter((item) => {
                return item.id !== action.payload.id
            })}

        case SAVE_BOOK_ACTION:
            return {...state, bookList: [...state.bookList, action.payload]}

        case UPDATE_BOOK_ACTION:
            return {...state, bookList: state.bookList.map((item) => {
                return item.id === action.payload.id ? action.payload : item
            })}

        case SET_SELECTED_BOOK_ACTION:
            return {...state, selectedBook: action.payload, visibleModalAddBook: true}

        case SHOW_MODAL_ADD_BOOK_ACTION:
            return {...state, visibleModalAddBook: action.payload}

        case ADD_PROPERTY_TO_BOOK_LIST_ACTION:
            return {...state, bookList: state.bookList.map((item) => {
                return {...item, filtered: action.payload}
            })}

        case ADD_AUTHOR_TO_LIST_ACTION:
            return {...state, filterAuthorList: action.payload}

        case FILTER_BOOK_ACTION:
            return {...state, bookList: state.bookList.map((item) => {
                return item.author === action.payload.author
                ? {...item, filtered: action.payload.isChecked} 
                : item
            })}

        case SEARCH_QUERY_ACTION:
            return {...state, searchValue: action.payload}

            default: 
            return state;
    }
}