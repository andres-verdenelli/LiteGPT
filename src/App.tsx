import './App.css'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

function App() {
  return (
    <>
      <div className='text-center'>
        <h1 className='text-3xl font-bold underline'>LiteGPT</h1>
      </div>
      <Button>Click me</Button>

      <Card className='mx-auto mt-4 w-[350px]'>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card content goes here</p>
        </CardContent>
      </Card>
      <div className='flex w-full max-w-sm items-center space-x-2 p-4'>
        <Input
          type='text'
          placeholder='Message GPT'
        />
        <Button type='submit'>Subscribe</Button>
      </div>
    </>
  )
}

export default App
