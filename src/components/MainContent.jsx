import { ArrowUp } from 'lucide-react'

export default function MainContent() {
  return (
    <>
      <main className='flex flex-grow flex-col overflow-hidden'>
        <div className='flex-grow overflow-auto px-6 pb-4'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus, odit illo. Sed error suscipit cum accusamus laudantium
            expedita unde nobis corporis, consequatur sunt dolores reiciendis
            eveniet aliquid. Sunt, porro soluta. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptatibus, odit illo. Sed error
            suscipit cum accusamus laudantium expedita unde nobis corporis,
            consequatur sunt dolores reiciendis eveniet aliquid. Sunt, porro
            soluta. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus, odit illo. Sed error suscipit cum accusamus laudantium
            expedita unde nobis corporis, consequatur sunt dolores reiciendis
            eveniet aliquid. Sunt, porro soluta. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptatibus, odit illo. Sed error
            suscipit cum accusamus laudantium expedita unde nobis corporis,
            consequatur sunt dolores reiciendis eveniet aliquid. Sunt, porro
            soluta. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus, odit illo. Sed error suscipit cum accusamus laudantium
            expedita unde nobis corporis, consequatur sunt dolores reiciendis
            eveniet aliquid. Sunt, porro soluta. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptatibus, odit illo. Sed error
            suscipit cum accusamus laudantium expedita unde nobis corporis,
            consequatur sunt dolores reiciendis eveniet aliquid. Sunt, porro
            soluta. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus, odit illo. Sed error suscipit cum accusamus laudantium
            expedita unde nobis corporis, consequatur sunt dolores reiciendis
            eveniet aliquid. Sunt, porro soluta. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptatibus, odit illo. Sed error
            suscipit cum accusamus laudantium expedita unde nobis corporis,
            consequatur sunt dolores reiciendis eveniet aliquid. Sunt, porro
            soluta.
          </p>
        </div>
        <div className='flex px-6 py-4 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]'>
          <input
            className='w-full rounded-md border p-2 focus-visible:outline-none'
            type='text'
            name=''
            id=''
            placeholder='Ask anything'
          />
          <div className='flex items-center'>
            <button className='ml-2 rounded-full bg-black p-1'>
              <ArrowUp color='white' />
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
