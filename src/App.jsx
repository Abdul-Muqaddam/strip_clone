import React, { useEffect, useRef } from 'react'
import './App.css'
import { gsap } from 'gsap'
import _ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(_ScrollTrigger)


function App() {
  const imageRef=useRef(null);
  useEffect(()=>{

  },[])
  return (
    <>
      <div className='bg-gradient-to-r from-[#FBD02C] to-[#65C227]  h-[100vh] slanted-div'>
        <div className='text-white'>
          <header className='flex items-center justify-center  '>
            <nav className='flex w-[84.375vw] justify-between items-center p-3 h-[10vh] '>
              <div className='flex justify-between items-center w-[50.016vw]'>

                <h1 className='text-[1.5rem] font-bold'>
                  ARCHISOFTCARE
                </h1>
                <ul className='flex justify-between w-[34.016vw]'>
                  <li>Products</li>
                  <li>Solutions</li>
                  <li>Developers</li>
                  <li>Resource</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div className='flex items-center w-[16.875vw] justify-between'>
                <button aria-label='contact sales' className='flex font-semibold text-[0.95rem] w-[9vw] justify-evenly items-center hover:text-[#e8e7e7] group' >
                  Contact sales
                  <div className='group-hover:hidden '>
                    &gt;
                  </div>
                  <img src="./arrow.png" alt="" className='h-[2vh] group-hover:block hidden pt-1' />
                </button>
                <button aria-label='sign in' className='bg-[white] hover:bg-[#f0f0f0] text-[#6BC327] flex w-[7vw] justify-evenly items-center py-1 rounded-[1rem] font-semibold text-[0.95rem] group'>
                  Sign in
                  <div className='group-hover:hidden'>
                    &gt;
                  </div>
                  <img src="./arrow1.png" alt="" className='h-[2vh] group-hover:block hidden pt-1' />
                </button>
              </div>
            </nav>
          </header>
          <div className='flex  justify-center'>

            <div className='flex w-[84.375vw] h-[30vh] items-center justify-between'>

              <div className='flex bg-[black]/10 w-[30vw] rounded-[1rem] justify-center'>
                <div className='flex font-semibold'>
                  Sessions 2025 <div className='font-extrabold'>&nbsp;. &nbsp;</div>
                </div>
                <div className='flex items-center group cursor-pointer hover:text-[#f0f0f0] text-[0.9rem]'>
                  Early-bird registeration now open
                  <div className='group-hover:hidden'>
                    &gt;
                  </div>
                  <img src="./arrow.png" alt="" className='h-[2vh] group-hover:block hidden pt-1 ' />
                </div>
              </div>
            </div>
          </div>
          <div className='absolute right-[-1rem] top-[8.5rem]'>
            <div className='backdrop-blur-sm h-[40vh] w-[30vw] bg-[white]/30 rounded-[1rem]  '>
              <div className='flex items-center justify-between'>
                <div className='flex items-center h-[10vh] justify-between w-[13vw]'>
                  <img src="brand_logo_main.svg" alt="" className='py-5 pl-5 pr-2  h-[11vh]' />
                  <div className='text-[0.8rem] font-bold'>ROCKET RIDES</div>
                  <div className='pb-1 rotate-90'>&gt;</div>
                </div>
                <input type="text" className='h-[3.5vh] rounded-[3.5px] text-[0.7rem] py-1 px-7' placeholder='Search' />
                <img src="./svg.svg" alt="" className=' absolute right-[10.6rem] ' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className='text-[4rem] font-bold w-[35vw] bg-gradient-to-t from-[#374d2c] to-[#5b7d3f] bg-clip-text text-shadow-green text-transparent absolute top-[12rem] left-24 leading-tight'>
          Financial infrastructure to grow your revenue
        </div>
        <div className='w-[55vw] flex justify-center'>
          <div className='w-[40vw] flex justify-center text-[1rem]'>
            Join the millions of companies of all sizes that use  ARCHISOFTCARE to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.
          </div>
        </div>
        <div className='flex w-[32vw] h-[10vh] items-center justify-center'>
          <div className='w-[18vw] flex justify-between items-center'>
            <button className='flex text-white bg-[#6BC327] px-3 py-1 text-[0.9rem] w-[8vw] rounded-[2rem] justify-between'>
              Start Now
              <div>&gt;</div>
            </button>
            <button className='flex text-[#6BC327] w-[8.5vw] justify-between'>
              contact sales
              <div>&gt;</div>
            </button>
          </div>
        </div>
        <div className='w-[100vw] flex justify-center'>
          <div className='w-[65vw] h-[50vh] flex justify-evenly flex-col'>
            <div className='flex justify-between h-[10vh]'>
              <img src="./OpenAI.svg" alt="" className='h-[5vh] ' />
              <img src="./amazon.svg" alt="" className='h-[5vh] ' />
              <img src="./google.svg" alt="" className='h-[5vh] ' />
              <img src="./ANTHROP.svg" alt="" className='h-[3vh]' />
            </div>
            <div className='w-[65vw] flex justify-between'>
              <img src="./MARRIOT.svg" alt="" className='h-[7vh] w-[15vw]  ' />
              <img src="./shopify.svg" alt="" className='h-[7vh]  ' />
              <img src="./airBNB.svg" alt="" className='h-[7vh] w-[23vw] ' />
              <img src="./URBN.svg" alt="" className='h-[8vh] w-[13vw] ' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
