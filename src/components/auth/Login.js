import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import checkGuest from "./checkGuest";
import "../Login.css";

function Login() {
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function attemptLogin() {
        axios.post('https://medicalstore.mashupstack.com/api/login', {
            email: email,
            password: password
        }).then(response => {
            setErrorMessage('')
            var user = {
                email: email,
                token: response.data.token
            }
            console.log(user.token)
            dispatch(setUser(user));
            navigate('/medicines');
        }).catch(error => {
            if (error.response.data.errors) {
                setErrorMessage(Object.values(error.response.data.errors).join(''))
            } else if (error.response.data.message) {
                setErrorMessage(error.response.data.message)
            } else {
                setErrorMessage('Failed to login user. Please contact admin')
            }
        })
    }
    return (<div>
        <Navbar />

        <div className="container">
            <div className="row">
                <div className="col-8 offset-2 center">
                    <h2>Login</h2>
                    {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : ''}
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text"
                            className="form-control"
                            value={email}
                            onInput={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password"
                            className="form-control"
                            value={password}
                            onInput={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={attemptLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}


export default checkGuest(Login);