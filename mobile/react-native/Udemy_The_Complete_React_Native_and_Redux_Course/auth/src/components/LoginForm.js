import React, { Component } from 'react';
import {Text} from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginFrom extends Component {

    state = { 
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {

        const {email, password} = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword( email, password)
            .then(this.onLogingSucess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLogingSucess.bind(this))
                    .catch(this.onLogingFail.bind(this));
            });
    }

    onLogingFail() {
        this.setState({
            error: 'Authentication failed',
            loading: false
        });
    }

    onLogingSucess() {
        this.setState({ 
            email: '', 
            password: '', 
            error: '', 
            loading: false})
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email} 
                        onChangeText={ value => this.setState({ email: value })} />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        secureTextEntry 
                        onChangeText={ value => this.setState({ password: value })} />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginFrom;