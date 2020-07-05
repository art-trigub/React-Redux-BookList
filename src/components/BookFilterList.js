import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { filterBook, addAuthorToList, addPropertyToBookList } from '../store/actions'

function BookFilterList({ bookList, addPropertyToBookList, filterAuthorList, filterBook, addAuthorToList }) {
    let authorList = []
    bookList.map((item => {
        return authorList.push(item.author)
    }))

    function onChangeFilter(e) {
        let author = e.target.name;
        let isCheckedInput = e.target.checked;
        console.log(bookList)
        filterBook({author: author, isChecked: isCheckedInput})
    }

    return (
        <div className="book-filter__wrapper">
            {authorList.map((elem, index) => (
                <div className="book-filter__title" key={index}>{elem}<input name={elem} type="checkbox" onChange={onChangeFilter} elem={elem}/></div>
            ))}
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