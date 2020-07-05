import React, {useState, useEffect} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { saveBook, updateBook, showNodalAddBook } from '../store/actions'
import api from '../services/api';

function ModalAddBook({ saveBook, selectedBook, visibleModal, updateBook, showNodalAddBook }) {
    const emptyDataBook = {
        id: '',
        title: '',
        author: '',
        description: '',
        photo: ''
    };
    const [dataNewBook, setDataNewBook] = useState(emptyDataBook)

    useEffect(() => {
        setDataNewBook(selectedBook);
        if(visibleModal) showNodalAddBook(true)
      }, [selectedBook])

    function onActiveModal() {
        showNodalAddBook(!visibleModal);
    }

    function onAddNewBook(e) {
        e.preventDefault()
        onActiveModal()
        clearInput()
        dataNewBook.id
        ? onUpdateBook(dataNewBook)
        : onSaveNewBook(dataNewBook)
    }

    function onUpdateBook(dataNewBook) {
        api.put(dataNewBook.id, dataNewBook).then((resp) => {
            return updateBook(resp.data)
        })
    }

    function onSaveNewBook(data) {
        data.id = Date.now()
        api.post('', dataNewBook).then((resp) => {
            return saveBook(resp.data)
        })
    }

    function cancelModal() {
        onActiveModal();
        clearInput();
    }

    function clearInput() {
        setDataNewBook(emptyDataBook)
    }

    function onChange(e) {
        setDataNewBook({
            ...dataNewBook,
            [e.target.name]: e.target.value
        })     
    }

    return (
        <div className="modal-add-book__wrapper">
            {visibleModal
            ?
            <div>
                <form action="">
                    <input className="modal-add-book__input" onChange={onChange} type="text" name="title" value={dataNewBook.title} placeholder="Title"/>
                    <input className="modal-add-book__input" onChange={onChange} type="text" name="author" value={dataNewBook.author} placeholder="Author"/>
                    <input className="modal-add-book__input" onChange={onChange} type="text" name="description" value={dataNewBook.description} placeholder="Description"/>
                    <input className="modal-add-book__input" onChange={onChange} type="text" name="photo" value={dataNewBook.photo} placeholder="Photo"/>
                    <button className="modal-add-book__button-save" onClick={onAddNewBook}>Save</button>
                </form>
                <button className="modal-add-book__button-cancel" onClick={cancelModal}>Cancel</button>
            </div>
            :
            <div>
                <button className="modal-add-book__button-add" onClick={onActiveModal}>Add Book</button>
            </div>}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        selectedBook: state.selectedBook,
        visibleModal: state.visibleModalAddBook
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveBook: bindActionCreators(saveBook, dispatch),
        updateBook: bindActionCreators(updateBook, dispatch),
        showNodalAddBook: bindActionCreators(showNodalAddBook, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddBook)