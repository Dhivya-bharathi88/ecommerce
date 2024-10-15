import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {

  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
        
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Everlasting 1234 Horizon Avenue,<br/> Suite 567 Metropolis,<br/> CA 90210 United States</p>
          <p className='text-gray-500'>Tel: +1 (800) 123-4567 <br/>Email: support@everlasting.com</p>
          <p className='font-semibold text-x1 text-gray-600'>Careers at careers@everlasting.com</p>
          <p className='text-gray-500'>Everlasting Careers 789 Innovation Park,<br/> 4th Floor Tech Valley,<br/> NY 10001 United States</p>
           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>explore jobs</button>
          

        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact