// import { useState } from 'react'
import Header from '@/components/chat/Header'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import PropmtInput from '@/components/ui/PropmtInput'

export default function Home() {
  return (
    <>
      <Header />
      <div className="mb-4 p-2.5 h-[calc(100vh-36px-4rem)] flex flex-col justify-between bg-stone-100 rounded-2xl md:p-4">
        <div className="mb-4 flex flex-col flex-1 justify-center gap-4">
          <div className="mx-auto flex flex-col gap-2 justify-center items-center pb-20 text-center">
            <Avatar src="https://gravatar.com/avatar/6717be7d9ec2673e848f24b7979555a1?s=200&d=retro&r=x" size="lg" className="mb-2" />
            <h1 className="text-2xl font-bold">Hi, there</h1>
            <p>
              Next.js is a top front-end framework wich is most preferred by companies.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <Card variant="primary">
              <div className="flex flex-col justify-between">
                <div className="mb-3 flex justify-between items-center">
                  <h3 className="font-bold">Sam Lee</h3>
                  <button className="py-1 px-3 bg-blue-500 text-white text-xs rounded-lg">Data assistant</button>
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
          <div className="hidden gap-4 justify-center lg:flex">
            <Button variant="secondary">
              Connect Calendar
            </Button>
            <Button variant="secondary">
              Demo Task
            </Button>
            <Button variant="secondary">
              Browse Integrations
            </Button>
            <Button variant="secondary">
              Shared in Notes
            </Button>
          </div>
        </div>
        {/* prompt input */}
        <div className="mb-4">
          <PropmtInput />
          <p className="mt-6 text-center text-sm text-gray-500">Anim consectetur elit laboris ullamco mollit minim id proident <a href="" className='text-black underline'>dolore commodo et.</a></p>  
        </div>
      </div>
    </>
  )
}