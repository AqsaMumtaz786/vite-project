import React from 'react'

const Container = () => {
  return (
    <div>
      <div className='container bg-indigo-500 mx-auto my-5 h-48 w-48'>
       <p>Navbar</p>
      </div>
      <div className='container2  mx-auto bg-red-500  px-4  hover:py-8 w-48 h-48'>
       <p>navbar</p>
      </div>
      <br></br>
      <div className='md:container md:mx-auto h-48 w-48  bg-pink-500'>
     <p>Navbar</p>
      </div>
    </div>
  )
}

export default Container
