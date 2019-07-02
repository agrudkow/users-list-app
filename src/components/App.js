import React from 'react';
import FormContainer from './FormContainer';
import Header from './Header';
import UsersList from './UsersList';

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            users: []
        };

        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
        this.handleAddUserButtonClick = this.handleAddUserButtonClick.bind(this);
        this.handleClearListButtonClick = this.handleClearListButtonClick.bind(this);
    }

    handleDeleteButtonClick (nickname) {
        const isConfirmed = window.confirm(`Delete user ${nickname}`);
        if (isConfirmed) {
            this.setState(prevState => {
                const updatedUsersList = prevState.users.filter(user => user.nickname !== nickname);
    
                return {
                    users: updatedUsersList
                };
            });
        }
    }

    handleAddUserButtonClick (emailData, nicknameData, ipData) {
        const date = new Date();
        const dateYear = date.getFullYear();
        const dateMonth = (date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1);
        const dateDay = date.getDay() < 10 ? '0' + date.getDay() : date.getDay();
        const dateHours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const dateMinutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        const dateText = dateYear + '/' + dateMonth + '/' + dateDay + ' godz.: ' + dateHours + ':' + dateMinutes;
        this.setState( prevState => {
            const updatedUsersList = prevState.users;
            updatedUsersList.push({email: emailData, nickname: nicknameData, ip: ipData, registrationDate: dateText});
            return {
                users: updatedUsersList
            }
        })
    }

    handleClearListButtonClick () {
        const isConfirmed = window.confirm('Delete entire list of users');
        if (isConfirmed) {
            this.setState({
                users: []
            })
        }
    }

    render() {
        const numOfUsers = [...this.state.users].length;
        
        return (
            <div>
                <Header/>
                <FormContainer 
                    data={this.state.users} 
                    handleAddUserButtonClick={this.handleAddUserButtonClick}
                    handleClearListButtonClick={this.handleClearListButtonClick}
                />
                {
                    numOfUsers && <UsersList 
                                        data={this.state.users} 
                                        handleDeleteButtonClick={this.handleDeleteButtonClick}
                                    />
                }
            </div>
        )
    }
}

export default App;