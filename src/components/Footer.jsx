import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <p className='text-xl font-medium mb-5'>EVERLASTING</p>
          <p className='w-full md:w2/3 text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellat exercitationem blanditiis rem ratione id aut tempora iste, ab recusandae optio suscipit error laboriosam iure aliquam nobis repudiandae quidem. Nesciunt!
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy</li>

          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>everlasting@forver.com</li>
          </ul>
        </div>
        <div>
          <hr/>
          <p className='py-5 text-sm text-center'>Copyright 2024 everlasting.com - All Right Reserved.</p>
        </div>

      </div>
    </div>
  )
}

export default Footer