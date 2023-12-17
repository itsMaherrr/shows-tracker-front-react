import React from 'react';
import axios from 'axios';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
} from 'mdb-react-ui-kit';
import { Button as BsButton, Form } from 'react-bootstrap';
import { Button as MuiButton } from '@mui/material';


function Login() {

    const login = async (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        const user = {
            'username': username,
            'password': password
        };

        await axios.post(`http://localhost:8080/epd-project/webapi/myresource/login`, user)
            .then((response) => {
                if (response.status === 200) {
                    response = response.data;
                    if (response.success === 'true') {
                        localStorage.setItem('session', response.data);
                        window.location.href = "/";
                        //setRedirect(true);
                    }
                    else {
                        alert(response.message);
                    }
                }
                else {
                    alert('connection failed or something idk');
                }
                //localStorage.setItem('jwtToken', token);

            });
    }

    return (
        <div className="login">
            <MDBContainer className="my-5 gradient-form">

                <MDBRow>

                    <MDBCol col='6' className="mb-6">
                        <div className="d-flex flex-column ms-5">

                            <div className="text-center">
                                <img src="https://www.ccpb.it/wp-content/uploads/2017/10/EPD200.png"
                                    style={{ width: '185px' }} alt="logo" />
                                <h4 className="mt-1 mb-5 pb-1">We are The WISMAH Team</h4>
                            </div>
                            <Form onSubmit={login}>
                                <Form.Group>

                                    <label className='login-label'> Username </label>
                                    <MDBInput className='login-input' wrapperClass='mb-4' id='username' type='text' required='required' />
                                    <label className='login-label'> Password </label>
                                    <MDBInput className='login-input' wrapperClass='mb-4' id='password' type='password' required='required' />

                                    <div className="text-center pt-1 mb-5 pb-1">
                                        <BsButton id='login-btn' variant="secondary" type='submit' size='lg' >Login</BsButton><br />
                                        <a className="text-muted" href="#!">Forgot password?</a>
                                    </div>

                                    <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                        <p className="mb-0">Don't have an account?</p>
                                        <MuiButton id='register-btn' variant="outlined" color="error">
                                            Register
                                        </MuiButton>
                                    </div>
                                </Form.Group>
                            </Form>

                        </div>

                    </MDBCol>

                    <MDBCol col='6' className="mb-6">
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 class="mb-4">We are more than just a company</h4>
                                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>

                        </div>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    );
}

export default Login;