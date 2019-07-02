//FormContainer contains buisness logic 
import React from 'react';
import FormComponent from './FormComponent';

class FormContainer extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            email: '',
            isEmailValid: 'false',
            nickname: '',
            isNicknameValid: 'false',
            ip: '',
            isIPValid: 'false',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        const {name, value} = event.target;


        if (name === 'email') {
            this.setState({
                isEmailValid: this.validateEmail(value),
                email: value
            });
        } else if (name === 'nickname') {
            this.setState({
                isNicknameValid: this.validateNickname(value),
                nickname: value
            });
        } else if (name === 'ip') {
            this.setState({
                isIPValid: this.validateIP(value),
                ip: value
            });
        }
    }

    handleSubmit (event) {
        event.preventDefault();
        this.props.handleAddUserButtonClick(this.state.email, this.state.nickname, this.state.ip);
        this.setState({
            email: '',
            isEmailValid: 'false',
            nickname: '',
            isNicknameValid: 'false',
            ip: '',
            isIPValid: 'false',
        });
    }

    validateEmail (value) {
        const emailRegExp = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

        if (!emailRegExp.test(value)) return false;

        return [...this.props.data].filter(user => user.email === value).length > 0 ? false : true;
    }

    validateNickname (value) {
        const nicknameRegExp =/^[a-z0-9_-]{3,20}$/igm;

        if (!nicknameRegExp.test(value)) return false;

        return [...this.props.data].filter(user => user.nickname === value).length > 0 ? false : true;
    }

    validateIP (value) {
        const ipRegExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g;

        return ipRegExp.test(value);
    }

    render () {
        const numOfUsers = [...this.props.data].length;
        return (
            <div>
                <FormComponent 
                    onChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    state={this.state} 
                    handleClearListButtonClick={this.props.handleClearListButtonClick}
                    numOfUsers={numOfUsers}
                />
            </div>
        )
    }
}

export default FormContainer;