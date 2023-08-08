import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";

function RegisterScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRegister = async () => {
        try {
            await dispatch(registerThunk({ username, password }));
            navigate('/tuiter/profile');
        } catch (e) {
            alert(e);
        }
    };

    return (
        <div>
            <h1>Register Screen</h1>
            <div className="mt-2">
                <label for="username">Username</label>
                <input id="username" className="form-control" type="text" placeholder="Enter username"
                    onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="mt-2">
                <label for="password">Password</label>
                <input id="password" className="form-control" type="password" placeholder="Enter password"
                    onChange={(event) => setPassword(event.target.value)} />
            </div>
            <button className="btn btn-primary mt-2"
                onClick={handleRegister}>
                Register
            </button>
        </div>
    );
}

export default RegisterScreen