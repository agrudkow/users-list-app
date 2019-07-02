import React from 'react';
import FormContainer from './FormContainer';
import Header from './Header';
import UsersList from './UsersList';

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            users: [],
            sortColumn: 'registrationDate', //Can be registrationDate, nickname, email
            sortType: 'asc',    //Can asc- ascending. desc-descending
        };

        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
        this.handleAddUserButtonClick = this.handleAddUserButtonClick.bind(this);
        this.handleClearListButtonClick = this.handleClearListButtonClick.bind(this);
        this.handleSortButtonClick = this.handleSortButtonClick.bind(this);
    }

    handleDeleteButtonClick (nickname) {
        const isConfirmed = window.confirm(`Do you want to delete user with a nickname ${nickname}?\nRemember you cannot undo that oparation.`);
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
        const isConfirmed = window.confirm('Do you want to delete entire list?\nRemember you cannot undo that oparation.');
        if (isConfirmed) {
            this.setState({
                users: []
            })
        }
    }

    handleSortButtonClick(columnName) {
        this.setState(prevState => {
            const {sortColumn, sortType, users} = prevState;
            const updatedSortType = (sortType === 'asc' && sortColumn === columnName) ? 'desc' : 'asc';
            const updatedUsersList = updatedSortType === 'asc' ? 
                users.sort((userA, userB) => userA[columnName] > userB[columnName] ? 1 : -1) 
                :
                users.sort((userA, userB) => userA[columnName] < userB[columnName] ? 1 : -1) 

            return {
                users: updatedUsersList,
                sortColumn: columnName,
                sortType: updatedSortType
            }
        });

        
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
                                        handleSortButtonClick={this.handleSortButtonClick}
                                    />
                }
            </div>
        )
    }
}

export default App;