import React from 'react';
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='summy_logo' className='w-28 object-contain'/>

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