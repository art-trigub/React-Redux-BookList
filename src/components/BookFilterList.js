import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { filterBook, addAuthorToList, addPropertyToBookList } from '../store/actions'

function BookFilterList({ bookList, addPropertyToBookList, filterAuthorList, filterBook, addAuthorToList }) {
    useEffect(() => {
        bookList.forEach((item) => {
            addAuthorToList(item.author)
        })
    }, [bookList])
    

    function onChangeFilter(value) {
        filterBook(value)
        if(value === "Выберите автора") addPropertyToBookList(true)
    }

    return (        
        <div className="book-filter__wrapper">
            <select className="book-filter__title" onChange={({target}) => onChangeFilter(target.value)}>
                <option>Выберите автора</option>
                {filterAuthorList.map((elem, index) => (
                    <option key={index} value={elem} name={elem}>{elem}</option>
                ))}
            </select>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        bookList: state.bookList,
        filterAuthorList: state.filterAuthorList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        filterBook: bindActionCreators(filterBook, dispatch),
        addAuthorToList: bindActionCreators(addAuthorToList, dispatch),
        addPropertyToBookList: bindActionCreators(addPropertyToBookList, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookFilterList)