//FormContainer contains buisness logic 
import React from 'react';
import FormComponent from './FormComponent';

class FormContainer extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            email: '',
            isEmailValid: false,
            emailValidationMessage: '',
            nickname: '',
            isNicknameValid: false,
            nicknameValidationMessage: '',
            ip: '',
            isIPValid: false,
            ipValidationMessage: '',
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
            isEmailValid: false,
            nickname: '',
            isNicknameValid: false,
            ip: '',
            isIPValid: false,
        });
    }

    validateEmail (value) {
        const emailRegExp = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

        if (!emailRegExp.test(value)) {
            this.setState({emailValidationMessage: 'Provide valid email e.g. jan@kowalski.pl'})
            return false;
        }

        if ([...this.props.data].filter(user => user.email === value).length > 0) {
            this.setState({emailValidationMessage: 'Another user with this email already exists.'})
            return false;
        }

        return true;
    }

    validateNickname (value) {
        const nicknameRegExp =/^[a-z0-9_-]{3,20}$/igm;

        if (!nicknameRegExp.test(value)) {
            this.setState({nicknameValidationMessage: 'Nickname has to contain only letters a-z, A-Z (whithout nation specific characters), digits, -, _  and from 3 to 20 characters'});
            return false;
        }

        if ([...this.props.data].filter(user => user.nickname === value).length > 0) {
            this.setState({nicknameValidationMessage: 'Another user with this nickname already exists.'});
            return false;
        }

        return true;
    }

    validateIP (value) {
        const ipRegExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g;

        if (!ipRegExp.test(value)) {
            this.setState({ipValidationMessage: 'Provide valid IP adress e.g. 123.123.123.123'});
            return false;
        }

        return true;
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