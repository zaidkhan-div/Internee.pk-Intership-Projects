// ProfileCard.js
import React from 'react';
import './HomePage.css';
import { auth } from '../Firebase';

const ProfileCard = () => {

    async function logout() {
        await auth.signOut();
        window.location.href = '/'
    }



    return (
        <div className="card">
            <img
                src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                alt="Profile"
                className="profile-pic"
            />
            <h2 className="profile-title">Jane Doe</h2>
            <p className="profile-description">
                A passionate developer focused on building beautiful and responsive user interfaces.
            </p>
            <button onClick={logout}>Sign Out</button>
        </div>
    );
}

export default ProfileCard;
    