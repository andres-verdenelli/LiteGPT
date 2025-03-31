import Chat from '../components/Chat'
import ChatInput from '../components/ChatInput'

export default function MainContent() {
  return (
    <>
      <main className='flex grow flex-col overflow-hidden'>
        <div className='grow overflow-auto px-6 pb-4'>
          <Chat />
        </div>
        <div className='px-3 pb-3 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]'>
          <ChatInput />
        </div>
      </main>
    </>
  )
}
