import React from 'react'
import {connect} from 'react-redux'
import BookListItem from './BookListItem'

function BookList({ bookListDefault, searchValue, isLoading }) {
    let bookList = bookListDefault
    function checkIncludesSearchQuery() {
        bookList = bookList.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    }
    console.log('render Book List', bookList)

    checkIncludesSearchQuery()
    return (
        <div className="book-list__wrapper">
            <div className="book-list__header">
                <div className="book-list__header-item">
                    Title
                </div>
                <div className="book-list__header-item">
                    Author
                </div>
            </div>
            <div>
                {isLoading 
                ? 'Loading...'
                : bookList.map((item) => (
                    item.filtered ? <BookListItem item={item} key={item.id}/> : null
                ))               
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        bookListDefault: state.bookList,
        searchValue: state.searchValue,
        isLoading: state.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
