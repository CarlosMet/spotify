import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/UserSlice'
import {BiUser} from 'react-icons/bi'
import {AiFillCaretDown} from 'react-icons/ai'
import { selectRelease } from '../../../features/ReleasesSlice'
import { selectRecent } from '../../../features/Recent'
import Releases from '../../releases/Releases'
import { useDispatch } from 'react-redux'
import { SET_PLAYING, selectPlaying } from '../../../features/PlayingSlice'
import RecentlyPlayed from '../../recent/RecentlyPlayed'
import { selectQuery, SET_QUERY } from '../../../features/Query'
import { selectSearch } from '../../../features/SearchSlice'
import {BsSearch} from 'react-icons/bs'
import {BsFillPlayFill} from 'react-icons/bs'
import Songs from '../../search/Songs'
import Artists from '../../search/Artists'
import { selectRender, SET_RENDER } from '../../../features/RenderSlice'
import Library from '../../Library/Library'
import PlaylistPreview from '../../PlaylistPreview/PlaylistPreview'
import logo from './undraw_landscape_photographer_re_vrtu.svg'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'



const Body = () => {
  const source = useSelector(selectPlaying)
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const releases = useSelector(selectRelease)
  const recentlyPlayed = useSelector(selectRecent)
  const searchResults = useSelector( selectSearch )
  const query = useSelector(selectQuery)
  const render = useSelector(selectRender)
  // console.log(recentlyPlayed)  
  let newReleases = []
  
  if (releases != null) {
    newReleases = releases.albums.items       
  }

  if (searchResults != null){
    var searchSongs = searchResults.songs?.tracks?.items;    
    var searchArtists = searchResults.artist;
  } 

  const inputHandler = (e)=> {
    dispatch(SET_QUERY(e.target.value))
  }  

  const audioSources = recentlyPlayed.map( src => {
    return (
      src.track.preview_url
    )
  } )
  const navColor = render.background ? "#2389b8" : "#121212"


  return (
    <div className='bg-[#121212] h-[84vh] overflow-x-hidden'>
        <div className='bg-[#121212]'>
          <div style={{background: navColor}} className='navbar w-[82vw] h-14 flex text-center justify-between pl-9 lg:pl-12 items-center'>
            {render.from  
            ? <div 
            onClick={()=>{
              render.from === "releases" 
              ? dispatch( SET_RENDER({home: true}) )
              : dispatch( SET_RENDER({search: true}) )

            }}
            style={{visibility: 'visible'}} 
            className='text-white flex'>
                <IoIosArrowBack className='cursor-pointer' size={35} />
                <IoIosArrowForward size={35} color={"#8e8e8e"} />
              </div>
            : <div style={{visibility: 'hidden'}} className='text-white cursor-pointer'>
                <IoIosArrowBack size={35} />
              </div>
            }
            

            <div className=''>
              <div className='mx-8 mt-4 flex items-center bg-neutral-800 rounded-2xl w-52 gap-3 h-8 text-white px-2 font-semibold py-5'>
                
                <div className='rounded-full bg-gray-500 '>
                  {user.images.length === 0 ? <BiUser size={25} /> : <img className='w-8 h-8 rounded-full' src={user.images[0].url} alt="user" />}
                </div>
                <p>{user.display_name}</p>
                <AiFillCaretDown className='mt-1' />
              </div>

            </div>            

          </div>          

        </div>  

        <div className='home text-white h-[100vh]'>
            
           { render.home && 
              <div>
                <div>              
                  <Releases release={newReleases} />              
                </div>
                <div>
                  <RecentlyPlayed recentlyPlayed={ recentlyPlayed }/>
                </div>  
              </div> 
            }  

           { render.search &&
            <div className=''>
                <div className='flex items-center relative w-[120vw] md:w-[400px] ml-6 md:ml-12'>                
                  <input type="text" placeholder='Search...' className='text-gray-500 py-2 rounded-full px-10' onChange={inputHandler} ></input>
                  <div className='absolute z-50 left-2'><BsSearch color='black' size={25} /></div>
                </div>   
                <div className='flex flex-col lg:flex-row ml-12'>           
                  <Songs />
                  <Artists />
                </div>  
                {query === "" &&
                <div className='grid place-items-center mt-[35vh]'>
                  <img className='b w-[22rem]' src={logo} alt="search-img" />
                </div>}
              </div>
            }

            { render.library &&
              <div className=''>
                <Library />
              </div>
              
            }

           { render.playlistPreview &&
            <div>
              <PlaylistPreview />
            </div>
            }

           

        </div>      

        
             
    </div>
  )
}

export default Body
        
        
