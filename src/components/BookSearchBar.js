import React from 'react'
import {searchQuery} from '../store/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function BookSearchBar({ searchValue, searchQuery}) {
    function onChange(e) {
        searchQuery(e.target.value)
        console.log(searchValue)

    }
    return (
        <div className="search-bar__wrapper">
            <input className="search-bar__input" onChange={onChange} type="text" placeholder="Search"/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        searchValue: state.searchValue
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchQuery: bindActionCreators(searchQuery, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookSearchBar)