import React, { useState } from 'react';
export const Home = ({ travle }) => {
    const [id, setId] = useState([]);
    console.log(id);
    return (
        <div className=' flex max-h-screen' >
            <div className=''>
                <div className=' grid sm:grid-cols-2 md:grid-cols-4 pt-28 bg-white gap-10 px-5'>
                    {
                        travle.map(item => <a href={`/destination/${id}`}>
                            <div onClick={() => setId(item.id)} className=' space-y-6 flex justify-center items-center cursor-pointer space-x-10 border shadow hover:shadow-xl duration-500 py-20 px-20 rounded-md'>
                                <img className='bg-white w-52' src={item.img} alt="" />
                                <div className=' text-xl font-semibold'>
                                    <p>{item.name}</p>
                                </div>
                            </div></a>)
                    }
                </div>
            </div>
        </div>
    )
}
