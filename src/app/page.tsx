// import { useState } from 'react'
import Header from '@/components/chat/Header'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import PropmtInput from '@/components/ui/PropmtInput'

export default function Home() {
  return (
    <div className='max-w-5xl'>
      <Header />
      <div className="mb-4 py-4 px-28 h-full flex flex-col justify-between bg-stone-100 rounded-2xl">
        <div className="mb-4 flex flex-col flex-1 justify-center gap-4">
          <div className="mx-auto pb-20 text-center">
            <h1 className="text-2xl font-bold mb-2">Hi, there</h1>
            <p>
              Next.js is a top front-end framework wich is most preferred by companies.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Card variant='primary'>
              <div className="flex flex-col justify-between">
                <div className="mb-3 flex justify-between items-center">
                  <h3 className="font-bold">Sam Lee</h3>
                  <button className='py-1 px-3 bg-blue-500 text-white text-xs rounded-lg'>Data assistant</button>
                </div>
                Labore in tempor dolor duis id occaecat sunt.
              </div>
            </Card>
            <Card>
              <div className="flex flex-col justify-between">
                <h3 className="font-bold">Sam Lee</h3>
                Labore in tempor dolor duis id occaecat sunt.
              </div>
            </Card>
            <Card>
              <div className="flex flex-col justify-between">
                <h3 className="font-bold">Sam Lee</h3>
                Labore in tempor dolor duis id occaecat sunt.
              </div>
            </Card>
          </div>
          <div className="flex gap-4 justify-center">
            <Button variant='secondary'>
              Connect Calendar
            </Button>
            <Button variant='secondary'>
              Demo Task
            </Button>
            <Button variant='secondary'>
              Browse Integrations
            </Button>
            <Button variant='secondary'>
              Shared in Notes
            </Button>
          </div>
        </div>
        {/* prompt input */}
        <div className='mb-4'>
          <PropmtInput />
          <p className="mt-4 text-center text-sm text-gray-500">Anim consectetur elit laboris ullamco mollit minim id proident <a href="" className='text-black underline'>dolore commodo et.</a></p>  
        </div>
      </div>
    </div>
  )
}