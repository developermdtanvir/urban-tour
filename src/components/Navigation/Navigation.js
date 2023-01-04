import React from 'react'
export const Navigation = ({ id }) => {
    return (
        <div className=' flex justify-between items-center p-5 border-b bg-gradient-to-tl dark:to-slate-90'>
            <div className='text-2xl font-extrabold'>Urban Tour</div>
            <div className=' px-20'>
                <a className=' px-14' href="/destination">Destination</a>
                <a className=' px-14' href="/blog">Blog</a>
                <a className=' px-14' href="/contact">Contact</a>
                <a className=' bg-gradient-to-br from-indigo-900 to-violet-700 rounded px-8 py-2 text-xl text-white font-semibold' href="/login">Login</a>
            </div>
        </div>

    )
}
