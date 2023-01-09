import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Destination = () => {


  const [pick, setPick] = useState();
  console.log(pick);
  const { id } = useParams();
  console.log(id);

  const handleBlur = (e) => {
    setPick(e.target.value)

  }
  const handleSubmit = (e) => {

    e.preventDefault()
  }
  return (
    <div className=' max-w-screen pt-10 grid md:grid-cols-2'>
      <div className=' w-1/2 px-14'>
        <form className=' bg-slate-100 h-80 w-80 flex justify-center items-center'>
          <div className=' space-y-10'>
            <div className=' space-y-5'>
              <p className=' text-lg font-semibold'>Pick From </p>
              <input className=' px-10 py-2 outline-orange-500' type="" name="" />
            </div>
            <div>
              <p className=' text-lg font-semibold'>Pick To</p>
              <input className=' px-10 py-2 outline-orange-500' type="" name="" />
            </div>
            <input className=' bg-orange-500 px-20 cursor-pointer  py-2 text-lg font-semibold text-white rounded' type='submit' value='submit' onClick={handleSubmit} />
          </div>
        </form>
      </div>
      <div className='w-1/2'>
        <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Dhaka%20%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>
      </div>
    </div>
  )
}
