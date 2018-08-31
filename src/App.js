import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC0-NPUgkQ9XzKfZHVmiv8cJlmvyj4qnkw',
      authDomain: 'manager-15b9d.firebaseapp.com',
      databaseURL: 'https://manager-15b9d.firebaseio.com',
      projectId: 'manager-15b9d',
      storageBucket: 'manager-15b9d.appspot.com',
      messagingSenderId: '903852646908',
    }
    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    )
  }
}

export default App
