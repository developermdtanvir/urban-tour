import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase.config';
import './Login.css';
export const Login = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [newUser, setNewUser] = useState(false)

    console.log(newUser);
    const handleSubmit = () => {
        const auth = getAuth(app);
        if (newUser) {
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    console.log(error)
                });
        }
        if (!newUser) {
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then(res => {
                    console.log(res);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
        }
    }



    const handleBlur = e => {
        let isValid;
        if (e.target.name === 'email') {
            isValid = /^([a-zA-Z0-9_\-\.'’]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(e.target.value);

        }
        if (e.target.name === 'password') {
            isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/.test(e.target.value);
        }
        if (isValid) {
            const newLoginUser = { ...user };
            newLoginUser[e.target.name] = e.target.value;
            setUser(newLoginUser);
        }
    }
    return (
        <section className=' bg-gray-100 flex min-h-screen items-center justify-center'>
            <div>
                <div>
                    <h1>hello world</h1>
                </div>
                <div>
                    <img src="../../images/image.avif" alt="" />
                </div>
            </div>
        </section>
    )
}
