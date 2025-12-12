"use client"
import React from 'react'

export default function MyButton() {
  return (
    <button className='bg-red-600 text-white px-5 py-2 rounded-xl' 
        onClick={() => {console.log('hello from client compo')}}>Click me !</button>
  )
}
