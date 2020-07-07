import React, { useState }from 'react'
import BookItemFullData from './BookItemFullData'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { onDeleteBook, setSelectedBook, showNodalAddBook } from '../store/actions'

function BookListItem({ item, onDeleteBook, setSelectedBook }) {
    const [isBookDataOpen, setBookDataOpen] = useState(false)

    function onDelete(e) {
        e.stopPropagation()
        onDeleteBook(item.id)
    }

    function onSelect(e) {
        e.stopPropagation()
        setSelectedBook(item);
        showNodalAddBook(true);
    }

    function showFullBookData() {
        setBookDataOpen(!isBookDataOpen)
    }

    return (
        <div onClick={showFullBookData} className={`book-item__wrapper ${ isBookDataOpen ? "open" : ""}`}>
            {isBookDataOpen 
            ? <BookItemFullData item={item}/>
            : <>
                <div className="book-item__title">
                    {item.title}
                </div>
                <div className="book-item__author">
                    {item.author}
                </div>
                <div>
                    <span onClick={onSelect} className="book-item__edit-icon">&#9998;</span>
                    <span onClick={onDelete} className="book-item__delete-icon">&#10006;</span>
                </div>
            </>}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        bookList: state.bookList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDeleteBook: bindActionCreators(onDeleteBook, dispatch),
        setSelectedBook: bindActionCreators(setSelectedBook, dispatch),
        showNodalAddBook: bindActionCreators(showNodalAddBook, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListItem)