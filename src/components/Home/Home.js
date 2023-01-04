import React, { useState } from 'react';

export const Home = ({ travle }) => {
    const [id, setId] = useState([]);
    console.log(id);
    return (
        <div className=' flex max-h-screen bg-gray-100'>
            <div>
                <div className=' grid md:grid-cols-4 gap-10 pt-28 bg-white border'>
                    {
                        travle.map(item => <a href={`/detail/${id}`}>
                            <div onClick={() => setId(item.id)} className=' space-y-6 flex justify-center items-center cursor-pointer '>
                                <img className='bg-white' src={item.img} alt="" />
                                <p className=''>{item.name}</p>
                            </div></a>)
                    }
                </div>
            </div>
        </div>
    )
}
