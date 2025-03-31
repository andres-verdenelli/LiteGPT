import { Menu, SquarePen, Search } from 'lucide-react'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {isMenuOpen && (
        // Lateral Menu
        <div className='fixed inset-0 z-50 flex'>
          {/* Overlay */}
          <div
            className='fixed inset-0 z-51 bg-black opacity-30'
            onClick={toggleMenu}
          >
            test
          </div>
          {/* Lateral Panel */}
          <div className='z-52 w-80 bg-white px-4 shadow-lg'>
            <div className='flex justify-between py-4'>
              <button onClick={toggleMenu}>
                <Menu />
              </button>
              <div>
                <button className='mr-4'>
                  <Search />
                </button>
                <button>
                  <SquarePen />
                </button>
              </div>
            </div>
            <ul className='space-y-2'>
              <li className='font-bold'>Yesterday</li>
              <li className='cursor-pointer rounded-md py-2 hover:bg-gray-500'>
                <p>Subir repo a GitHub Subir repo a GitHub</p>
              </li>
              <li>
                <a href=''>Division gastos vacaciones</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <header className='grid grid-cols-3 border-b border-b-gray-200 p-4'>
        <div className='flex'>
          <button
            onClick={toggleMenu}
            className='cursor-pointer'
          >
            <Menu />
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <h1 className='text-xl'>LiteGPT</h1>
        </div>
        <div className='flex items-center justify-end'>
          <button className='cursor-pointer'>
            <SquarePen />
          </button>
        </div>
      </header>
    </>
  )
}
