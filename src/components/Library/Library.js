import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../../features/favoritesSlice'
import {BiPlay} from 'react-icons/bi'
import './Library.css'

const Library = () => {
  const favorites = useSelector(selectFavorites)
  if( favorites !== null ){
    var artists= favorites.singers.map( artist => {
      return(
        artist.name
      )
    } )
    var tracks= favorites.songs.map( artist => {
      return(
        artist.name
      )
    } )
  }
  return (
    <div className='ml-12'>
        <h3 className='text-2xl font-bold'>Your Favs</h3>
        <div>

            

            <div className='fav md:w-[500px] mr-2 md:h-[420px] bg-gradient-to-br from-[#470ef4] to-[#8d8de5] rounded-lg my-6 relative px-5 pb-2 pt-14'>

                <div className=''>
                  <h3 className='text-3xl tracking-tighter font-extrabold mb-1'>Top artists</h3>
                  <p className='text-gray-300 mb-4'>{artists.join(", ")}</p>
                </div>
                <div>
                  <h3 className='text-3xl font-extrabold mb-1 tracking-tighter'>Top tracks</h3>
                  <p className='text-gray-300'>{tracks.length < 10 ? tracks.join(", ") : tracks.slice(0,10).join(", ")+" ..."}</p>
                </div>
                <div className='play h-16 w-16 rounded-full bg-green-500 absolute left-[70%] top-[76%] md:left-[82%] md:top-[72%] shadow-2xl shadow-black flex items-center justify-center hover:bg-green-400'>
                    <BiPlay size={42} color={"black"} className="ml-2" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Library