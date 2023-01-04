import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
export const Navigation = ({ id }) => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    return (
        <div className=' flex justify-between items-center p-5 border-b bg-gradient-to-tl dark:to-slate-90'>
            <div className='text-2xl font-extrabold'>Urban Tour</div>
            <div className=' px-20'>
                <Link className=' px-14' to="/destination">Destination</Link>
                <Link className=' px-14' to="/blog">Blog</Link>
                <Link className=' px-14' to="/contact">Contact</Link>
                <Link className=' bg-gradient-to-br from-indigo-900 to-violet-700 rounded px-8 py-2 text-xl text-white font-semibold' to="/login">Login</Link>
                {userInfo.email && <Link className=' font-semibold' to="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>{userInfo.name}</Link>}
            </div>
        </div>

    )
}
