import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'


export default function Navbar() {
  const [linkOpen, setLinkOpen] = useState(false)
  const NavbarLink = [{
    id: 1,
    link: 'home'
  },
  {
    id: 2,
    link: 'about'
  },
  {
    id: 3,
    link: 'project'
  },
  {
    id: 4,
    link: 'skills'
  },
  {
    id: 5,
    link: 'contact'
  }
  ]



  return (
    <div className="flex justify-between items-center px-4 bg-black text-white w-full h-20" >
      <div>
        <h1 className="text-5xl  font-signature ml-2">Vaishnavi</h1>
      </div>
      <ul className='md:flex hidden'>
        {NavbarLink.map(({ id, link }) =>
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-500'>
            <Link to={link} smooth duration={500}> {link}</Link>
          </li>
        )}
      </ul>

      <div onClick={(e) => setLinkOpen(!linkOpen)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {linkOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {linkOpen && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500'>
          {NavbarLink.map(({ id, link }) =>
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <Link to={link} smooth duration={500} onClick={(e) => setLinkOpen(!linkOpen)} > {link}</Link>

            </li>
          )}
        </ul>
      )}


    </div>
  )
}
