import React from 'react'

export const Navigation = () => {
    return (
        <div className=' flex justify-between items-center p-10 border-b border-teal-700 bg bg-gradient-to-tl dark:to-slate-900 dark:from-blue-800 bg'>
            <div className='text-4xl font-extrabold'>Urban Tour</div>
            <div className=' px-20 text-white'>
                <a className=' px-14' href="/home">Home</a>
                <a className=' px-14' href="/destination">Destination</a>
                <a className=' px-14' href="/blog">Blog</a>
                <a className=' px-14' href="/contact">Contact</a>
                <a className=' bg-gradient-to-br from-indigo-900 to-violet-700 rounded px-8 py-2 text-xl text-white font-semibold' href="/login">Login</a>
            </div>
        </div>

    )
}
