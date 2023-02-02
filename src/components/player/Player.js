import React from 'react'
import Body from './body/Body'
import Sidebar from './sidebar/Sidebar'
import PlayerComp from '../playerComp/PlayerComp'


const Player = () => {
  
  return (
    <div className='max-w-[100vw] overflow-x-hidden'>
        <div className='flex h-full w-[100%]'>
            <Sidebar />
            <div className='pl-[18vw]'>
                <Body />
            </div>
        </div>
        <PlayerComp  />
    </div>
  )
}

export default Player