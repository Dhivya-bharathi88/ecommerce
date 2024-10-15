import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16 w-full'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Everlasting, your trusted destination for high-quality products that stand the test of time.</p>
          <p>We believe in delivering more than just products; we offer lasting value. Our aim is to bring you a unique collection that combines elegance, functionality, and longevity. </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>our mission is to deliver good products and make the service available to each and every corners of the world!</p>

        </div>
      </div>

        <div className='text-xl py-4'>
          <Title text1={'WHY TO'} text2={'CHOOSE US'}/>
          <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>We prioritize providing a seamless and secure shopping experience. Our team ensures that every aspect of the website, from product browsing to the checkout process, is rigorously tested for functionality, speed, and reliability. We conduct thorough testing to eliminate bugs, optimize page load times, and ensure mobile compatibility.</p>

            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience</b>
              <p className='text-gray-600'>We strive to make your shopping experience as convenient as possible. Our intuitive interface, combined with smart search and filtering options, allows you to easily find what you're looking for. With a streamlined checkout process, multiple secure payment methods, and fast, reliable delivery, we ensure that every step is hassle-free. </p>

            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service</b>
              <p className='text-gray-600'>Exceptional customer service is at the heart of everything we do. Our dedicated support team is available to assist you with any inquiries or issues, ensuring your shopping experience is smooth and stress-free. We offer multiple channels for support, including live chat, email, and phone, to provide quick and efficient responses. </p>

            </div>

          </div>
          <NewsletterBox/>

        </div>

    </div>
  )
}

export default About