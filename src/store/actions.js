
export const SAVE_INITIAL_LIST_ACTION = 'SAVE_INITIAL_LIST'
export function saveInitinalList(payload) {
    return {
        type: SAVE_INITIAL_LIST_ACTION,
        payload: payload
    }
}

export const DELETE_BOOK_ACTION = 'DELETE_BOOK'
export function onDeleteBook(payload) {
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



