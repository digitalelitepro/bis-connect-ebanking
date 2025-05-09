import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-19 fixed inset-0 flex justify-between items-center p-2 shadow-sm shadow-slate-200/50  '>
      <div>
          <Image
            src='https://bis-bank.com/wp-content/uploads/2022/07/logo-bis4.svg'
            width={180}
            height={100}
            alt='logo bis bank'
          />
      </div>
      <div className='flex flex-col justify-end place-items-end'>
        <h1>Hotline</h1>
        <p>+221 33 849 62 62</p>
      </div>
    </div>
  )
}

export default Navbar