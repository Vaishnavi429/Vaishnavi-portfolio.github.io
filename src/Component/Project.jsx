import React from 'react'

import shootgame from '../assets/project/shootgame.jpg'
import todolist from '../assets/project/todolist.jpeg'
import piechart from '../assets/project/pie-chart.jpg'
import weather from '../assets/project/weather.jpg'
import agrilink from '../assets/project/agrilink.png'
import calculator from '../assets/project/calculator.png'




export default function Project() {
  const project = [
    {
      id: 1,
      src: weather,
      demohref: 'https://vaishnavi-weather-app.netlify.app/',
      codehref: 'https://github.com/Vaishnavi429/Weather-App.github.io'
    },
    {
      id: 2,
      src: piechart,
      demohref: 'https://vaishnavi-d3bar-chart.netlify.app/',
      codehref: 'https://github.com/Vaishnavi429/d3BarChart.github.io'
    },
    {
      id: 3,
      src: shootgame,
      demohref: 'https://vaishnavi429.github.io/survivalFight.github.io/',
      codehref: 'https://github.com/Vaishnavi429/survivalFight.github.io'
    },
    {
      id: 4,
      src: todolist,
      demohref: 'https://vaishnavi-mydaily-routine.netlify.app/',
      codehref: 'https://github.com/Vaishnavi429/MyDailyRoutine.github.io'
    },
    {
      id: 5,
      src: agrilink,
      demohref: 'https://agrilink.netlify.app/',
      codehref: 'https://github.com/Vaishnavi429/agrilinks.github.io'
    },
    {
      id: 6,
      src: calculator,
      demohref: 'https://vaishnavi429.github.io/My-Calculator.github.io/',
      codehref: 'https://github.com/Vaishnavi429/My-Calculator.github.io'
    },


  ]

  return (
    <div name="project" className='w-full h-screen bg-gradient-to-b from-green-200 to-green-700'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-red-900'>
        <div>
          <p className='text-4xl font-bol  border-b-4 border-gray-500 p-2 inline'>Projects</p>
          <p className='py-6'>Check out some of my project right here</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3' >

          {project.map(({ id, src, demohref, codehref }) => (
            <div key={id} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-300 p-2 m-2'>
              <img src={src} alt='project' />
              <div className='flex   justify-between'>
                <a className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md  px-2 my-2 hover:scale-110 duration-300'
                  href={demohref}>Demo</a>
                <a className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md  px-2 my-2 hover:scale-110 duration-300'
                  href={codehref}>Code</a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
