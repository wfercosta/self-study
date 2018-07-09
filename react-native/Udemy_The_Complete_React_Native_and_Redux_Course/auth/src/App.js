import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase'
import LoginForm from './components/LoginForm';

class App extends Component {

    state = {
        loggedIn: null
    }

    componentWillMount() {
        
        firebase.initializeApp({
            apiKey: 'AIzaSyAepqlZZjC8zlB5hnJlkodomBN1j21PtXY',
            authDomain: 'auth-e2ea8.firebaseapp.com',
            databaseURL: 'https://auth-e2ea8.firebaseio.com',
            projectId: 'auth-e2ea8',
            storageBucket: 'auth-e2ea8.appspot.com',
            messagingSenderId: '1042538859923'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button
                        onPress={() => firebase.auth().signOut()}
                        >Log out</Button>
                );
                break;
            case false:
                return <LoginForm />;
                break;
            default:
                return <Spinner size="large" />
                break;
        }

    }

    render() {
        return (
            <View>
                <Header headerText="Authentcation"></Header>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;