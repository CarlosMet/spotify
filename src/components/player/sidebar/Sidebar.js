import React from 'react'
import {FaSpotify} from 'react-icons/fa'
import {VscLibrary} from 'react-icons/vsc'
import {AiOutlineHome, AiOutlineSearch} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { selecPlaylist } from '../../../features/PlaylistSlice'
import { selectRender, SET_RENDER } from '../../../features/RenderSlice'
import { useDispatch } from 'react-redux'
import { SET_LISTQUERY } from '../../../features/listQuerySlice'
const Sidebar = () => {  
  
  const dispatch = useDispatch()
  

  return (
    <div className='h-[84vh] w-[20vw] fixed z-20 text-white bg-black flex flex-col'>
        
        <div className='flex items-center gap-2 mx-2 my-6 md:m-6'>
            <FaSpotify size={42} className="mt-1 hidden md:block" />
            <p className='text-xl md:text-3xl tracking-tighter font-semibold'>Spotify</p>
        </div>

        <div className='text-gray-300'>

            <div onClick={()=>{
              dispatch(SET_RENDER({
                home: true,
                search: false,
                library: false
              }));
              dispatch(SET_LISTQUERY(""))
            }} className='flex items-center md:text-lg gap-1 md:gap-3 md:ml-5 mt-3 cursor-pointer hover:text-white transition ease-in'>
              <AiOutlineHome color='#535353' size={25} />
              <p>Home</p>   
            </div>

            <div onClick={()=>{
              dispatch(SET_RENDER({
                home: false,
                search: true,
                library: false
              }));
              dispatch(SET_LISTQUERY(""))
            }} className='flex items-center md:text-lg gap-1 md:gap-3 md:ml-5 mt-3 cursor-pointer hover:text-white transition ease-in'>
              <AiOutlineSearch color='#535353' size={25} />
              <p>Search</p>   
            </div>

            <div onClick={()=>{
              dispatch(SET_RENDER({
                home: false,
                search: false,
                library: true
              }));
              dispatch(SET_LISTQUERY(""))
            }} className='flex items-center md:text-lg gap-1 md:gap-3 md:ml-5 mt-3 cursor-pointer hover:text-white transition ease-in'>
              <VscLibrary color='#535353' size={25} />
              <p>Your library</p>   
            </div>

        </div>

    </div>
  )
}

export default Sidebar