import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/UserSlice'
import {BiUser} from 'react-icons/bi'
import {AiFillCaretDown} from 'react-icons/ai'
import { selectRelease } from '../../features/ReleasesSlice'
import { selectRecent } from '../../features/Recent'
import Releases from '../releases/Releases'
import { useDispatch } from 'react-redux'
import { selectPlaying, SET_PLAYING } from '../../features/PlayingSlice'

import { selectQuery, SET_QUERY } from '../../features/Query' 
import { selectSearch } from '../../features/SearchSlice'
import {BsSearch} from 'react-icons/bs'
import {BsFillPlayFill} from 'react-icons/bs'
import { selectList } from '../../features/listQuerySlice'

const Songs = () => {
const source = useSelector(selectPlaying)
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const releases = useSelector(selectRelease)
  const recentlyPlayed = useSelector(selectRecent)
  const searchResults = useSelector( selectSearch )
  const query = useSelector(selectQuery)
  const listQuery = useSelector( selectList )
  // console.log(recentlyPlayed)
  // console.log(searchResults)
  let newReleases = []
  
  if (releases != null) {
    newReleases = releases.albums.items       
  }

  if (searchResults != null){
    var searchSongs = searchResults.songs?.tracks?.items;
    // console.log("from search", searchSongs )
    var searchArtists = searchResults.artist;
  } 

  const inputHandler = (e)=> {
    dispatch(SET_QUERY(e.target.value))
  }  

    
  return (
    
    <div className='songs'>

        <div className='search my-6'>

        

        <div>
        {query !== "" && searchSongs && <h3 className='text-2xl font-bold my-5'>Songs</h3>}
        {query !== "" && searchSongs
        ? searchSongs.slice(0,5).map( (song, index) => {
            return (
            <div key={index} className='flex justify-between md:w-[420px] items-center hover:bg-[#181818]'>

                <div className='flex gap-2 items-center my-2 w-[150px] md:w-[180px]'>
                    <img className='w-12' alt='track-img' src={song.album.images[2].url} />
                    <div>
                    <p>{song.name.length<20 ? song.name : song.name.slice(0,22) + "..." }</p>
                    <p className='text-sm text-gray-500'>{song.artists[0].name}</p>
                    </div>
                </div>

                <div className='flex items-center gap-10 w-[140px]'>
                    <BsFillPlayFill onClick={()=> {
                    dispatch(SET_PLAYING({
                        source:song.preview_url,
                        img: song.album.images[1].url,
                        title: song.name,                        
                        isPlaying : false
                    }))
                    }} className='mt-1 hover:text-green-500' />
                    {Math.trunc((song.duration_ms % 60000)/1000)>10
                      ? <p className='text-sm text-gray-400'>{Math.trunc(song.duration_ms/60000)} : {Math.trunc((song.duration_ms % 60000)/1000)}</p>
                      : <p className='text-sm text-gray-400'>{Math.trunc(song.duration_ms/60000)} : 0{Math.trunc((song.duration_ms % 60000)/1000)}</p>
                    }
                    
                </div>                          

            </div>
            )
        } )
        : null }
        </div>

        </div>


    </div>
  )
}

export default Songs