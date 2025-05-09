import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-19 fixed bg-gradient-to-b from-white to-cyan-50 inset-0 flex justify-between items-center p-2 shadow-sm shadow-slate-200/50 opacity-100  '>
      <div>
          <Image
            src='https://bis-bank.com/wp-content/uploads/2022/07/logo-bis4.svg'
            width={180}
            height={100}
            alt='logo bis bank'
          />
      </div>
      <div className='flex flex-col justify-end place-items-end'>
        <h4 className='text-lg font-bold text-blue-900'>Hotline</h4>
        <span className='bg-blue-950  py-1 px-3 rounded-lg  text-white font-semibold transition-all duration-900 ease-in-out animate-bounce mt-1 hover:animate-none hover:scale-105 hover:text-yellow-400'>+221 33 849 62 62</span>
      </div>
    </div>
  )
}

export default Navbar