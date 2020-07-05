import React from 'react'
import BookMain from './components/BookMain'
import { Provider } from 'react-redux'
import store from './store'

export default function App() {
  return <Provider store={store}>
        <BookMain />
      </Provider>

}
