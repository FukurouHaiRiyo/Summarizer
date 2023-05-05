import React from 'react';
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg hover:text-gray-600">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:text-gray-600" aria-current="page">Home</a>
            </li>
          </ul>
        </div>

        <button type='button' onClick={() => window.open('')} className='black_btn'>
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAi GPT-4</span>
      </h1>

      <h2 className='desc'>
        Simplify reading with Summy, an article summarizer that transfroms
        lengthy articles in clear and concize summaries
      </h2>
    </header>
  )
}

export default Hero;