import React from 'react'
import {connect} from 'react-redux'
import BookListItem from './BookListItem'

function BookList({ bookListDefault, filterAuthorList, searchValue }) {
    let bookList = bookListDefault
    function checkIncludesSearchQuery() {
        bookList = bookList.filter(item => item.title.toLowerCase().includes(searchValue))
    }
    
    let filtering = false  
    function checkStartingFiltering() {                        //Костыль для фильтрации, потому что никак не 
        for(let i = 0; i < bookList.length; i++) {             //получалось отображать список когда изначально
            if(bookList[i].filtered === true) filtering = true  //все чекбоксы выключены и нужно показать весь список                                                                     //показывать весь список
        }
    }
    checkStartingFiltering();

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
                {!filtering 
                ? bookList.map((item) => (
                    <BookListItem item={item} key={item.id}/>
                ))
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
        filterAuthorList: state.filterAuthorList,
        searchValue: state.searchValue
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
