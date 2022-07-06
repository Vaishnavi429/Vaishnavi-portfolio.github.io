import React from 'react'
import SocialLink from './SocialLink'
export default function Contact() {
    return (
        <div name='contact' className='w-full h-full bg-gradient-to-b from-green-200 to-green-700 p-4 text-red-900'>
            <div className='flex flex-col gap-2 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Contact</p>
                    <p className='py-6'>
                        Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/5a7ecb21-5539-4101-86a0-7ce0210e0163"
                    method='POST'
                        className='flex flex-col w-full md:w-1/2 gap-4 '>
                        <input type='text'
                            name='name'
                            placeholder='Enter your name'
                            className='p-2 bg-transparent border-2 border-red-900 rounded-md text-black focus:outline-none' />
                        <input type='text'
                            name='email'
                            placeholder='Enter your email'
                            className='p-2 bg-transparent border-2 border-red-900 rounded-md text-black focus:outline-none' />
                        <textarea name='message'
                            placeholder='Enter your message' rows="10"
                            className='p-2 bg-transparent border-2 border-red-900 rounded-md text-black focus:outline-none'
                        ></textarea>
                        <button
                            className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                            Let's talk</button>
                    </form>
                </div>
            </div>
       <SocialLink/>
        </div>
    )
}
