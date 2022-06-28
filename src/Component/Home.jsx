import React from 'react'
import Avatar from '../assets/Avatar.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function Home() {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-gray-500 to-black via-black text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold'>
                        I'm a Front-end Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I am a web development enthusiast and I love exploring a variety of tech stacks. I am a quick learner and a problem solver.
                    </p>
                    <div>
                        <li className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
                        ><a download
                            href="./VaishnaviCV.pdf">
                                Download CV
                            </a>  <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </li>
                    </div>
                </div>
                <div>
                    <img src={Avatar} className="rounded-2xl mx-auto w-2/3 md:w-full" alt="My-Avatar" />
                </div>
            </div>
        </div>

    )
}
