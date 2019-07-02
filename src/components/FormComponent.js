//FormComponent contains display logic
import React from 'react'; 

function FormComponent (props) {
    let emailClassName;
    let nicknameClassName;
    let ipClassName;

    if (props.state.email === '') {
        emailClassName = 'form-control'
    } else if (props.state.isEmailValid) {
        emailClassName = 'form-control is-valid'
    } else {
        emailClassName = 'form-control is-invalid'
    }

    if (props.state.nickname === '') {
        nicknameClassName = 'form-control'
    } else if (props.state.isNicknameValid) {
        nicknameClassName = 'form-control is-valid'
    } else {
        nicknameClassName = 'form-control is-invalid'
    }

    if (props.state.ip === '') {
        ipClassName = 'form-control'
    } else if (props.state.isIPValid) {
        ipClassName = 'form-control is-valid'
    } else {
        ipClassName = 'form-control is-invalid'
    }

    return (
        <div className='border border-secondary rounded'>
            <form className='' noValidate onSubmit={props.handleSubmit}>
                <div className='form-group'>
                    <label >Email adress</label>
                    <input
                        type='text'
                        name='email'
                        placeholder='Enter email'
                        className={emailClassName}
                        value={props.state.email}
                        onChange={props.onChange}
                    />
                    {!props.state.isEmailValid && <div className='invalid-feedback'>{props.state.emailValidationMessage}</div> }
                </div>
                <div className='form-group'>
                    <label>Nickname</label>
                    <input
                        id='nicknameInput1' 
                        type='text'
                        name='nickname'
                        placeholder='Enter nickname'
                        className={nicknameClassName}
                        value={props.state.nickname}
                        onChange={props.onChange}
                    />
                    {!props.state.isNicknameValid && <div className='invalid-feedback'>{props.state.nicknameValidationMessage}</div>}
                </div>
                <div className='form-group'>
                    <label >IP adress</label>
                    <input
                        id='ipInput1' 
                        type='text'
                        name='ip'
                        placeholder='Enter IP'
                        className={ipClassName}
                        value={props.state.ip}
                        onChange={props.onChange}
                    />
                    {!props.state.isIPValid && <div className='invalid-feedback'>{props.state.ipValidationMessage}</div>}
                </div>
                <div className='form-group d-flex justify-content-around pt-3'>
                    <button 
                        type='submit' 
                        className='btn btn-primary'
                        // disabled={!props.state.isEmailValid}
                        disabled={!props.state.isEmailValid || !props.state.isNicknameValid  || !props.state.isIPValid}
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