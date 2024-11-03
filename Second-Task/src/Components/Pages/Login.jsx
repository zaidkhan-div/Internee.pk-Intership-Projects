import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase'

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home')
        }
        catch (error) {
            alert(error.message = "Incorrect Email or Password")
        }
    }


    return (
        <form onSubmit={handleSubmit} style={{ width: "40%", margin: "auto", marginTop: "100px", border: "1px solid black", padding: "1.5rem", borderRadius: ".5rem" }}>
            <h3>Login</h3>

            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-3 ">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
            <p className="forgot-password text-right">
                New user <a href='/register' style={{ color: "blue", cursor: 'pointer', textDecoration: 'underline' }}>Register Here</a>
            </p>
        </form>
    );
}

export default Login
