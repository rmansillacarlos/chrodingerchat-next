// import { useState } from 'react'
import Header from '@/components/chat/Header'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import PropmtInput from '@/components/ui/PropmtInput'

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-24 flex flex-col justify-between h-full max-w-[720px]">
        <div className="mb-4 flex flex-col flex-1 justify-center gap-4">
          <div className="mx-auto pb-20 text-center">
            <h1 className="text-2xl font-bold mb-2">Hi, there</h1>
            <p>
              Next.js is a top front-end fraework wich is most preferred by companies.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Card>
              <div className="flex flex-col justify-between">
                <h3 className="text-lg font-bold">Sam Lee</h3>
                Labore in tempor dolor duis id occaecat sunt.
              </div>
            </Card>
            <Card>
              <div className="flex flex-col justify-between">
                <h3 className="text-lg font-bold">Sam Lee</h3>
                Labore in tempor dolor duis id occaecat sunt.
              </div>
            </Card>
            <Card>
              <div className="flex flex-col justify-between">
                <h3 className="text-lg font-bold">Sam Lee</h3>
                Labore in tempor dolor duis id occaecat sunt.
              </div>
            </Card>
          </div>
          <div className="flex gap-4 justify-center">
            <Button>
              Connect Calendar
            </Button>
            <Button>
              Demo Task
            </Button>
            <Button>
              Browse Integrations
            </Button>
            <Button>
              Shared in Notes
            </Button>
          </div>
        </div>
        {/* prompt input */}
        <div className="">
          <PropmtInput />
          <p className="text-center mt-2">Anim consectetur elit laboris ullamco mollit minim id proident <a href="" className='underline'>dolore commodo et.</a></p>  
        </div>
      </div>
    </>
  )
}