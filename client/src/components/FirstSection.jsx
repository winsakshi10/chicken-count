import React from 'react'

const FirstSection = () => {
  return (
    <div>
        <h1 className='mx-auto text-7xl font-sans font-extrabold text-red-800  flex justify-center items-center  mt-20 '>Curious about your chicken count? </h1>
        <p className='flex justify-center items-center text-xl font-sans my-4 font-semibold'>Find out how many feathered feasts you've devoured!</p>
        <button className=' bg-sky-700 font-semibold text-xl text-white p-2 rounded-md flex justify-center items-center mx-auto my-2'
        type="submit">Take the Quiz</button>
    </div>
  )
}

export default FirstSection