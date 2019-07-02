import React from 'react';

function User (props) {
    return (
        <tr>
            <td>{props.userData.email}</td>
            <td>{props.userData.nickname}</td>
            <td>{props.userData.ip}</td>
            <td>{props.userData.registrationDate}</td>
            <td>
                <button 
                    className='btn btn-danger'
                    onClick={() => props.onClick(props.userData.nickname)}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default User;