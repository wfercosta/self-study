import React, { Component } from 'react';
import { CardSection, Input } from './common';
import { Picker, Text, View } from 'react-native';
import { employeeUpdate } from '../actions';
import { connect } from 'react-redux';

class EmployeeForm extends Component {

    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({prop:'name', value})}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone Number"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({prop:'phone', value})}
                    />
                </CardSection>
                
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop:'shift', value})}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }

}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm; 
    return { name, phone, shift };
};


export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);