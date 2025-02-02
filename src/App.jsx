import { useState } from 'react'
import './style.css';
import GlassAnimation from './GlassAnimation'

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold">DailyCanvas</h1>
        <h2 className="text-xl mt-4">Empty your mind</h2>
        <GlassAnimation />
        <h2 className="text-xl mt-4">Fill your cup</h2>
      </div>
    </>
  )
}

export default App