import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'

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
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Text>Hello</Text>
        </View>
      </Provider>
    )
  }
}

export default App
