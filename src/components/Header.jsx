import { Menu } from 'lucide-react'
import { SquarePen } from 'lucide-react'

export default function Header() {
  return (
    <>
      <header className='grid grid-cols-3 border-b border-b-gray-200 p-4'>
        <div className='flex'>
          <button className='cursor-pointer'>
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
