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
        <div className=' flex justify-center items-center p-16 '>
            <div className=' space-y-20 '>
                <div><h1 className=' text-xl font-bold'>Create an account</h1></div>
                <div>
                    <label for=" htmlfor">NewUser</label>
                    <input onChange={() => setNewUser(!newUser)} className=' cursor-pointer' type="checkbox" name="" />
                    <from className='space-y-10'>
                        {newUser && <input onBlur={handleBlur} className='block px-20 border-b focus:outline-none' placeholder='Name' type="name" name="name" />}
                        <input onBlur={handleBlur} className='block px-20 border-b focus:outline-none' placeholder='Username or Email' type="email" name="email" />
                        <input onBlur={handleBlur} className='block px-20 border-b focus:outline-none' placeholder='password' type="password" name="password" />


                        <input className='block px-20 border-b focus:outline-none' placeholder='Confirm Pasword' type="password" name="password" />
                        <input onClick={handleSubmit} className=' text-center block cursor-pointer focus:outline-none' type="button" name="password" value={newUser ? "Create an account" : "Login "} />
                    </from>
                </div>
            </div>
        </div>
    )
}
