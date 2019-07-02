//FormComponent contains display logic
import React from 'react'; 

function FormComponent (props) {
    return (
        <div className='border border-secondary rounded'>
            <form onSubmit={props.handleSubmit}>
                <div className='form-group'>
                    <label >Email adress</label>
                    <input
                        type='text'
                        name='email'
                        placeholder='Enter email'
                        className='form-control'
                        value={props.state.email}
                        onChange={props.onChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Nickname</label>
                    <input
                        id='nicknameInput1' 
                        type='text'
                        name='nickname'
                        placeholder='Enter nickname'
                        className='form-control'
                        value={props.state.nickname}
                        onChange={props.onChange}
                    />
                </div>
                <div className='form-group'>
                    <label >IP adress</label>
                    <input
                        id='ipInput1' 
                        type='text'
                        name='ip'
                        placeholder='Enter IP'
                        className='form-control'
                        value={props.state.ip}
                        onChange={props.onChange}
                    />
                </div>
                <div className='form-group d-flex justify-content-around pt-3'>
                    <button 
                        type='submit' 
                        className='btn btn-primary'
                        disabled={!props.state.isEmailValid || !props.state.isNicknameValid || !props.state.isIPValid}
                    >
                        Add User
                    </button>
                    <button 
                        type='button' 
                        className='btn btn-danger'
                        onClick={props.handleClearListButtonClick}
                        style={props.numOfUsers > 0 ? {display: ''} : {display: 'none'}}
                    >
                        Clear List
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent;