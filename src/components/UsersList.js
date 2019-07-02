import React from 'react';
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import User from './User';

class UsersList extends React.Component {
    constructor (props) {
        super (props);
        this.state ={

        };
    }

    render () {
        const usersList = this.props.data.map(user => <User key={user.nickname} userData={user} onClick={this.props.handleDeleteButtonClick}/>)
        return (
            <div className='border border-secondary rounded mt-1'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope="col">
                                Email 
                                <button className='btn'>
                                    <FontAwesomeIcon icon={faSort} />
                                </button>
                            </th>
                            <th scope="col">
                                Nickname 
                                <button className='btn'>
                                    <FontAwesomeIcon icon={faSort} />
                                </button>
                            </th>
                            <th scope="col" style={{ paddingBottom: '21px' }}>
                                IP Adress
                            </th>
                            <th scope="col">
                                Registration date 
                                <button className='btn'>
                                    <FontAwesomeIcon icon={faSort} />
                                </button>
                            </th>
                            <th scope="col" style={{ paddingBottom: '21px' }}>
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UsersList;