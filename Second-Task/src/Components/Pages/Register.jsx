import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';


const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const navigate = useNavigate();


    const handleRegister = async (e) => {

        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            navigate('/home')
            console.log(user);
        }
        catch (error) {
            alert(error.message = 'Already registered')
        }
    }


    return (
        <form onSubmit={handleRegister} style={{ width: "40%", margin: "auto", marginTop: "100px", border: "1px solid black", padding: "1.5rem", borderRadius: ".5rem" }}>
            <h3>Sign Up</h3>

            <div className="mb-3">
                <label>First name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    onChange={(e) => setFname(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label>Last name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    onChange={(e) => setLname(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </div>
            <p className="forgot-password text-right">
                Already registered <a href="/">Login</a>
            </p>
        </form>
    );
}

export default Register
