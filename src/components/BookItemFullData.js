import React from 'react'
import { onDeleteBook, showNodalAddBook, setSelectedBook } from '../store/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function BookItemFullData({ item, onDeleteBook, setSelectedBook, showNodalAddBook }) {

    function onSelect(e) {
        e.stopPropagation()
        showNodalAddBook(true);
        setSelectedBook(item);
    }

    function onDelete(e) {
        e.stopPropagation()
        onDeleteBook(item);
    }

    return (
        <>
            <div className="book-item__image-wrapper">
                <img className="book-item__image-open" src={item.photo} alt=""/>
            </div>
            <div className="book-item__content-block">
                <div className="book-item__title-open">
                     Title: {item.title}
                </div>
                <div className="book-item__author-open">
                    Autror: {item.author}
                </div>
                <div className="book-item__description-open">
                    Description: {item.description}
                </div>
            </div>
            <div className="book-item__icon-block">
                <span onClick={onSelect} className="book-item__edit-icon">&#9998;</span>
                <span onClick={onDelete} className="book-item__delete-icon">&#10006;</span>
            </div>
        </>
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
        showNodalAddBook: bindActionCreators(showNodalAddBook, dispatch),
        setSelectedBook: bindActionCreators(setSelectedBook, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItemFullData)