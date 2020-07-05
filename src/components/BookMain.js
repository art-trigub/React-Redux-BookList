import React, { useEffect } from 'react'
import BookList from './BookList'
import api from '../services/api'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { saveInitinalList, addPropertyToBookList } from '../store/actions'
import ModalAddBook from './ModalAddBook'
import BookFilterList from './BookFilterList'
import BookSearchBar from './BookSearchBar'

function BookMain({ saveInitinalList, bookList, addPropertyToBookList }) {
    
    useEffect(() => {
      api.get('').then(resp => saveData(resp.data))
    }, [])

    function saveData(data) {
        saveInitinalList(data)
    }
    
    return (
        <div>
            <div className="book-main__header">
                Book List     
            </div>
            <BookSearchBar />
            <BookFilterList />
            <BookList />
            <ModalAddBook />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        bookList: state.bookList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveInitinalList: bindActionCreators(saveInitinalList, dispatch),
        addPropertyToBookList: bindActionCreators(addPropertyToBookList, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookMain)



