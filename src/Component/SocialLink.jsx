import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {BiMailSend} from 'react-icons/bi'
import {BsPersonFill} from 'react-icons/bs';


export default function SocialLink() {
  const sideLinks =[
    {
      id:1,
      link:(
        <>
        LinkedIn <FaLinkedin size={30}/>
        </>
      ),
      href:"https://linkedin.com" ,
      style:"rounded-tr-md"
    },
    {
      id:2,
      link:(
        <>
        Github <FaGithub size={30}/>
        </>
      ),
      href:"https://github.com/Vaishnavi429"
    },
    {
      id:3,
      link:(
        <>
        Mail <BiMailSend size={30}/>
        </>
      ),
      href:"mailto:guptavaish429@gmail.com"
    },
    {
      id:4,
      link:(
        <>
        Resume <BsPersonFill size={30}/>
        </>
      ),
      href:"./VaishnaviCV.pdf",
      style:"rounded-br-md",
      download:true,
    }

  ]
  return (

    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
          {sideLinks.map(({id,link,href,style,download})=>(
            <li key={id} className={`flex justify-between items-center w-40 h-12 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 bg-red-900 ${style}`}>
              <a 
              href={href} className='flex justify-between items-center w-full text-white px-3 '
              download={download}
              target='_blank'
              rel="noreferrer"
              >
                <>
               {link}
                </></a></li>
          ))}
            
        </ul>
      
    </div>
  )
}
