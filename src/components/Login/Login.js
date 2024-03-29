import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import app from '../../firebase.config';
import img from '../../images/image.avif';
import './Login.css';
export const Login = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        isLogin: false,
        success: ''
    });
    const [newUser, setNewUser] = useState(false)

    console.log(newUser);
    const auth = getAuth(app);


    const handleSubmit = (e) => {
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
                    const newUser = { ...user };
                    newUser.isLogin = true;
                    setUser(newUser);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    const newUsrInfo = { ...user };
                    newUsrInfo.success = errorMessage;
                    setUser(newUsrInfo);

                });
        }
        e.preventDefault()
    }

    const name = 'Tanvir'
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const { displayName, email } = res.user;
                let newUsrInfo = { ...user };
                newUsrInfo.name = displayName;
                newUsrInfo.email = email;
                setUser(newUsrInfo);
            }).catch(error => {
                console.log(error)
            })
    }

    const signout = () => {
        signOut(auth).then(() => {
            const logOutUser = { ...user };
            logOutUser.name = ''
            logOutUser.email = ''
            logOutUser.isLogin = true
            setUser(logOutUser)
        }).catch((error) => {
            // An error happened.
        });
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
            <div className=' flex max-w-3xl rounded-lg p-20 bg-cyan-100 shadow-xl '>
                <div className='md:w-1/2 px-16'>
                    <h2 className=' text-xl text-cyan-400 font-semibold'>Login</h2>
                    <p className=' text-cyan-300'>if you Already a Mumber easy login in </p>
                    <label for="">New User</label>
                    <input type="checkbox" name="" onChange={() => setNewUser(!newUser)} />
                    <p>{user.name}</p>
                    <form className=' grid grid-row-4 gap-6 mt-8'>
                        {newUser && <input onBlur={handleBlur} className='p-2 rounded-xl outline-cyan-800' placeholder='Name' type="text" name="name" />}
                        <input onBlur={handleBlur} className='p-2 rounded-xl outline-cyan-800' placeholder='Password' type="password" name="password" />
                        <input onBlur={handleBlur} className='p-2 rounded-xl outline-cyan-800' placeholder='email' type="email" name="email" />
                        <input onClick={handleSubmit} className=' p-2 bg-cyan-700 rounded-md text-white hover:scale-110 duration-500 cursor-pointer' type="submit" name="" value={user.isLogin ? 'LogOut' : 'Login'} />
                    </form>
                    {user.isLogin ? <button onClick={signout} className='hover:scale-110 duration-500 cursor-pointer mt-10 flex justify-center items-center py-2 bg-white rounded '><FcGoogle className=' mr-2' />Login out  Google</button> : <button onClick={googleSignIn} className='hover:scale-110 duration-500 cursor-pointer mt-10 flex justify-center items-center py-2 bg-white rounded '><FcGoogle className=' mr-2' />Login in Google</button>}

                    <p className=' text-red-600'>{user.success}</p>
                </div>
                <div className='w-1/2 md:block hidden'>
                    <img className=' rounded-md' src={img} alt="" />
                </div>
            </div>
        </section>
    )
}
