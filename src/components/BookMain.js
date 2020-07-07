import React, { useEffect } from 'react'
import BookList from './BookList'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { saveData } from '../store/actions'
import ModalAddBook from './ModalAddBook'
import BookFilterList from './BookFilterList'
import BookSearchBar from './BookSearchBar'

function BookMain({ saveData }) {
    
    useEffect(() => {
        saveData()
    }, [])

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
        saveData: bindActionCreators(saveData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookMain)



