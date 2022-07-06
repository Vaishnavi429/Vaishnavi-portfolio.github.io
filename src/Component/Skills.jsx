import React from 'react'
import github from '../assets/github.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import css from '../assets/css.png'
import reactImage from '../assets/reactImage.png'
import tailwind from '../assets/tailwind.png'




export default function Skills() {

    const skill = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'

        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'

        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'

        },
        {
            id:4,
            src:reactImage,
            title:'React',
            style:'shadow-blue-600'

        },
        {
            id:5,
            src:github,
            title:'guthub',
            style:'shadow-gray-400'

        },
        {
            id:6,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'

        }

    ]
  return (
    <div name='skills' className='bg-gradient-to-b from-green-200 to-green-700 w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-red-900'>
        <div>
            <p className='text-4xl font-bol  border-b-4 border-gray-500 p-2 inline'>Skills</p>
        </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12  py-8 sm:px-0 '>


            {
                skill.map(({id,src,title,style})=>(
                    <div className={`shadow-md hover:scale-105 duration-500 bg-gradient-to-b from-gray-300 to-gray-700 py-2 rounded-lg  ${style}`} key={id} >
                    <img src={src} alt="skills" className="w-20 mx-auto"/>
                    <p className='mt-3'>{title}</p>
                </div>
                )
           )}
          
          </div>
      </div>

    </div>
  )
}
