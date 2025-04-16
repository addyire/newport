'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { motion } from "motion/react"
import Suitcase from '@/components/icons/suitcase'
import Hammer2 from '@/components/icons/hammer-2'
import Handshake from '@/components/icons/handshake'
import { ChevronDownIcon } from 'lucide-react'

const Logo = dynamic(() => import('@/components/canvas/M1').then((mod) => mod.M1), { ssr: false })
const Environment = dynamic(() => import('@/components/canvas/Environment').then((mod) => mod), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const NavigationButton = ({children}) => {

  return <motion.div whileHover={{width: 300}} animate={{width: 'fit-content'}}>
    <button className="flex w-full items-center gap-2 whitespace-nowrap rounded-full border px-4 py-1 font-medium transition-all hover:bg-black hover:text-white">
      {children}
      <ChevronDownIcon className="size-4"/>
    </button>
  </motion.div>
}

const NavigationSection = () => {
  return <div className="my-2 flex">
    <NavigationButton>
      <Suitcase className="size-4"/>
      Experience
    </NavigationButton>
    <NavigationButton>
      <Hammer2 className="size-4"/>
      Projects
    </NavigationButton>
    <NavigationButton>
      <Handshake className="size-4"/>
      Connect
    </NavigationButton>
  </div>
}

export default function Page() {
  return (
    <>
      <main className="flex size-full max-h-screen items-center justify-center"><div className='mx-auto flex w-full flex-col flex-wrap items-center p-8  md:flex-row lg:max-w-screen-xl'>
        {/* jumbo */}

        <div className='w-full text-center md:w-4/12'>
          <View orbit className='flex h-96 w-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
              <Logo />
              <Environment />
              <Common />
            </Suspense>
          </View>
        </div>

        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/3 md:text-left'>
          <motion.p className='w-full uppercase'>Software Engineer</motion.p>
          <motion.h1 initial={{y: 25, opacity: 0}} animate={{y: 0, opacity: 1}}  className='text-5xl font-bold leading-tight'>Addison Ireland</motion.h1>
          <NavigationSection />
          <p>
            Currently, I'm studying Computer Science at Penn State as a brother and founding father of Alpha Chi Rho. When I'm not studying, I either work on some of my personal projects or learn something new.
          </p>
        </div>
      </div></main>

      {/* <div className='mx-auto flex w-full flex-col flex-wrap items-center p-12 md:flex-row  lg:w-4/5'> */}
      {/*   <div className='relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40'> */}
      {/*     <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Events are propagated</h2> */}
      {/*     <p className='mb-8 text-gray-600'>Drag, scroll, pinch, and rotate the canvas to explore the 3D scene.</p> */}
      {/*   </div> */}
      {/*   <div className='relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40'> */}
      {/*     <View orbit className='relative h-full  sm:h-48 sm:w-full'> */}
      {/*       <Suspense fallback={null}> */}
      {/*         <Dog scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} /> */}
      {/*         <Common color={'lightpink'} /> */}
      {/*       </Suspense> */}
      {/*     </View> */}
      {/*   </div> */}
      {/*   <div className='relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40'> */}
      {/*     <View orbit className='relative h-full animate-bounce sm:h-48 sm:w-full'> */}
      {/*       <Suspense fallback={null}> */}
      {/*         <Duck route='/blob' scale={2} position={[0, -1.6, 0]} /> */}
      {/*         <Common color={'lightblue'} /> */}
      {/*       </Suspense> */}
      {/*     </View> */}
      {/*   </div> */}
      {/*   <div className='w-full p-6 sm:w-1/2'> */}
      {/*     <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Dom and 3D are synchronized</h2> */}
      {/*     <p className='mb-8 text-gray-600'> */}
      {/*       3D Divs are renderer through the View component. It uses gl.scissor to cut the viewport into segments. You */}
      {/*       tie a view to a tracking div which then controls the position and bounds of the viewport. This allows you to */}
      {/*       have multiple views with a single, performant canvas. These views will follow their tracking elements, */}
      {/*       scroll along, resize, etc. */}
      {/*     </p> */}
      {/*   </div> */}
      {/* </div> */}
    </>
  )
}
