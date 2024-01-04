"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import AudioPlayer from 'react-h5-audio-player';
import { Instagram, X } from 'react-feather';
import Link from 'next/link';
import Nav from '../Nav/page';



export default function PlayHome() {
    return(
        <>
  <div className='MainBody'>
        <div className='w-50 bg-black'>
        <Nav />
        </div>
        <div className='flex'>
        <main className="px-24 py-32 flex items-center  justify-between w-full  "  >
        
      <ReactPlayer  clas
       url='https://www.youtube.com/watch?v=CCXLUQzuigw'
        />
        <div className='md:text-6xl text-white md:w-6/12   md:drop-shadow-xl md:item-center sm:text-white md:justify-center ' >
    <h1 className='text-4xl font-extrabold'>SPY X FAMILY</h1>
    <h1 className='font-extrabold'>WATCH <span className=''>SPY </span> X <span className='text-rose-300' >FAMILY</span></h1>
    <div className='flex'>
    <Link className='flex px-2' href=""><Instagram /> </Link>
    <Link  className='flex px-2' href=""><X /> </Link></div>
    </div>
      </main>
    </div>
    </div>
    



  <div className='justify-center flex my-24 ' >
        <Image className='w-52'
      src="/logo.png"
      width={500}
      height={500}
      alt="Picture of the author"
      />
      </div>

      <div className='flex justify-center'>
        <h1 className='font-bold '>Official Website <span className='text-white  font-bold  w-2'><button className='p-2 rounded-lg bg-emerald-800 transition duration-700 ease-in-out'><Link href="https://spy-family.net" className=''>CLICK HERE</Link></button></span></h1>
      </div>
  

    
      
    
        </>
    )

}