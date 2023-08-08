import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";

function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ username, password }));
            navigate('/tuiter/profile');
        } catch (e) {
            alert(e);
        }
    };

    return (
        <div>
            <h1>Login Screen</h1>
            <div className="mt-2">
                <label for="username">Username</label>
                <input id="username" className="form-control" type="text"
                    value={username} placeholder="Enter username"
                    onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="mt-2">
                <label for="password">Password</label>
                <input id="password" className="form-control" type="password"
                    value={password} placeholder="Enter password"
                    onChange={(event) => setPassword(event.target.value)} />
            </div>
            <button className="btn btn-primary mt-2"
                onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default LoginScreen