import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className='flex gap-3 bg-slate-900 px-7 py-6'>
        <Link className=' hover:text-slate-400 duration-300' href="/article">Articles</Link>
        <Link className=' hover:text-slate-400 duration-300' href="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default NavBar
