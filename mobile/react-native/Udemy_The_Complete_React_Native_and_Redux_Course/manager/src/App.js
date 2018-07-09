import React, { Component } from 'react';
import { View , Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAFG7HHbi3tJfOTDCt1AezlIx7_uzgoWao',
            authDomain: 'manager-f6b3b.firebaseapp.com',
            databaseURL: 'https://manager-f6b3b.firebaseio.com',
            projectId: 'manager-f6b3b',
            storageBucket: '',
            messagingSenderId: '416317859764'
          };
          firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={ createStore( reducers, {}, applyMiddleware(ReduxThunk)) }>
                <Router />
            </Provider>
        );
    }

}


export default App;