import React from 'react';
import {RaisedButton, TextField} from 'material-ui';
import ZerosCounter from "./ZerosCounter";
import Api from './../api/Api';
import './NameForm.css';

class NameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            zeros: 0,
            formErrors: {firstName: '', lastName: ''}
        };

        this.sendName = this.sendName.bind(this);
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
    }

    validateForm() {
        let formErrors = {};
        let valid = true;
        if (!this.state.firstName) {
            formErrors.firstName = "First name is required";
            valid = false;
        }
        if (!this.state.lastName) {
            formErrors.lastName = "Last name is required";
            valid = false;
        }
        if (!valid) {
            this.setState({formErrors: formErrors});
        }
        return valid;
    }

    sendName(event) {
        this.setState({formErrors: {}});
        this.setState({zeros: 0});
        if (this.validateForm()) {
            Api.postName(this.state.firstName, this.state.lastName, this.showResult());
        }
        event.preventDefault();
    }

    showResult() {
        return (result) => {
            if (!isNaN(result)) {
                this.setState({zeros: result})
            } else {
                this.setState({zeros: "Something went wrong, please try again soon."})
            }
        }
    }

    updateFirstName(event) {
        this.setState({firstName: event.target.value});
    }

    updateLastName(event) {
        this.setState({lastName: event.target.value});
    }

    render() {
        return (
            <div className="NameForm">
                <div className="NameInput">
                    <div className="NameInputWrapper">
                        <TextField
                            id="firstName"
                            floatingLabelText="Enter your first name"
                            value={this.state.firstName}
                            onChange={this.updateFirstName}
                            errorText={this.state.formErrors.firstName}/>
                        <TextField
                            id="lastName"
                            floatingLabelText="Enter your last name"
                            value={this.state.lastName}
                            onChange={this.updateLastName}
                            errorText={this.state.formErrors.lastName}/>
                    </div>
                    <RaisedButton className="NameButton" onClick={this.sendName} label="Find out" primary={true}/>
                </div>
                <ZerosCounter zeros={this.state.zeros}/>
            </div>
        );
    }
}

export default NameForm;
