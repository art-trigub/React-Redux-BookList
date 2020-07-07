
import api from '../services/api'

export const SAVE_DATA_LOADING_ACTION = 'SAVE_DATA_LOADING_ACTION'
export function saveDataLoading(payload) {
    return {
        type: SAVE_DATA_LOADING_ACTION,
        payload: payload
    }
}

export const SAVE_DATA_ACTION = 'SAVE_DATA_ACTION'
export function saveData() {
    return function(dispatch) {
        dispatch(saveDataLoading(true))
        api.get('').then(resp => {
            dispatch(saveInitinalList(resp.data))
            dispatch(saveDataLoading(false))
            dispatch(addPropertyToBookList())
        })
    }
}

export const ON_DELETE_BOOK_ACTION = 'ON_DELETE_BOOK_ACTION'
export function onDeleteBook(id) {
    return function(dispatch) {
        dispatch(saveDataLoading(true))
        api.delete(id).then((resp) => {
            dispatch(deleteBook(resp.data))
            dispatch(saveDataLoading(false))
        })
    }
}


export const ON_UPDATE_BOOK_ACTION = 'ON_UPDATE_BOOK_ACTION'
export function onUpdateBook(book) {
    return function(dispatch) {
        dispatch(saveDataLoading(true))
        api.put(book.id, book).then((resp) => {
            dispatch(updateBook(resp.data))
            dispatch(filterForNewBook(resp.data))
            dispatch(saveDataLoading(false))
        })
    }
}

export const ON_SAVE_BOOK_ACTION = 'ON_SAVE_BOOK_ACTION'
export function onSaveBook(book) {
    return function(dispatch) {
        dispatch(saveDataLoading(true))
        book.id = Date.now()
        api.post('', book).then((resp) => {
            dispatch(saveBook(resp.data))
            dispatch(filterForNewBook(resp.data))
            dispatch(saveDataLoading(false))
        })
    }
}        

export const FILTER_FOR_NEW_BOOK_ACTION = 'FILTER_FOR_NEW_BOOK_ACTION'
export function filterForNewBook(payload) {
    return {
        type: FILTER_FOR_NEW_BOOK_ACTION,
        payload: payload
    }
}

export const SAVE_INITIAL_LIST_ACTION = 'SAVE_INITIAL_LIST'
export function saveInitinalList(payload) {
    return {
        type: SAVE_INITIAL_LIST_ACTION,
        payload: payload
    }
}

export const DELETE_BOOK_ACTION = 'DELETE_BOOK'
export function deleteBook(payload) {
    return {
        type: DELETE_BOOK_ACTION,
        payload: payload
    }
}

export const SAVE_BOOK_ACTION = 'SAVE_BOOK'
export function saveBook(payload) {
    return {
        type: SAVE_BOOK_ACTION,
        payload: payload
    }
}

export const SET_SELECTED_BOOK_ACTION = 'SET_SELECTED_BOOK'
export function setSelectedBook(payload) {
    return {
        type: SET_SELECTED_BOOK_ACTION,
        payload: payload
    }
}

export const UPDATE_BOOK_ACTION = 'UPDATE_BOOK'
export function updateBook(payload) {
    return {
        type: UPDATE_BOOK_ACTION,
        payload: payload
    }
}

export const SHOW_MODAL_ADD_BOOK_ACTION = 'SHOW_MODAL_ADD_BOOK'
export function showNodalAddBook(payload) {
    return {
        type: SHOW_MODAL_ADD_BOOK_ACTION,
        payload: payload
    }
}

export const FILTER_BOOK_ACTION = 'FILTER_BOOK'
export function filterBook(payload) {
    return {
        type: FILTER_BOOK_ACTION,
        payload: payload
    }
}

export const SEARCH_QUERY_ACTION = 'SEARCH_QUERY_'
export function searchQuery(payload) {
    return {
        type: SEARCH_QUERY_ACTION,
        payload: payload
    }
}

export const ADD_AUTHOR_TO_LIST_ACTION = 'ADD_AUTHOR_TO_LIST'
export function addAuthorToList(payload) {
    return {
        type: ADD_AUTHOR_TO_LIST_ACTION,
        payload: payload
    }
}

export const ADD_PROPERTY_TO_BOOK_LIST_ACTION = 'ADD_PROPERTY_TO_BOOK_LIST'
export function addPropertyToBookList(payload) {
    return {
        type: ADD_PROPERTY_TO_BOOK_LIST_ACTION,
        payload: payload
    }
}



