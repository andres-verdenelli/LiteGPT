import { ArrowUp, Plus, Globe, Lightbulb, Ellipsis } from 'lucide-react'

export default function ChatInput() {
  return (
    <div className='w-full rounded-2xl border-1 border-gray-200 px-4 py-2'>
      <div className='mb-2'>
        <input
          className='w-full p-2 focus-visible:outline-none'
          type='text'
          name=''
          id=''
          placeholder='Ask anything'
        />
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-1'>
          <div>
            <button className='rounded-full border-1 border-gray-200 p-2'>
              <Plus color='#4a5565' />
            </button>
          </div>
          <div>
            <button className='rounded-full border-1 border-gray-200 p-2'>
              <Globe color='#4a5565' />
            </button>
          </div>
          <div>
            <button className='rounded-full border-1 border-gray-200 p-2'>
              <Lightbulb color='#4a5565' />
            </button>
          </div>
          <div>
            <button className='rounded-full border-1 border-gray-200 p-2'>
              <Ellipsis color='#4a5565' />
            </button>
          </div>
        </div>
        <div>
          <button className='ml-2 rounded-full bg-black p-2'>
            <ArrowUp color='white' />
          </button>
        </div>
      </div>
    </div>
  )
}
