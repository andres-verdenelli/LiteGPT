import { ArrowUp, Plus, Globe, Lightbulb, Ellipsis } from 'lucide-react'

export default function ChatInput() {
  return (
    <div className='w-full rounded-2xl border-1 border-black px-4 py-2'>
      <div>
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
            <button className='rounded-full border-1 border-black p-2'>
              <Plus color='black' />
            </button>
          </div>
          <div>
            <button className='rounded-full border-1 border-black p-2'>
              <Globe color='black' />
            </button>
          </div>
          <div>
            <button className='rounded-full border-1 border-black p-2'>
              <Lightbulb color='black' />
            </button>
          </div>
          <div>
            <button className='rounded-full border-1 border-black p-2'>
              <Ellipsis color='black' />
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
