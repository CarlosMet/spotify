import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SET_PLAYLISTPREVIEW } from '../../features/PlaylistPreviewSlice'
import { SET_RENDER } from '../../features/RenderSlice'
import { SET_QUERY } from '../../features/Query'
import { SET_LISTQUERY } from '../../features/listQuerySlice'

const Releases = ({release}) => {
    const dispatch = useDispatch()
    const [cardsToRender, setCardsToRender] = useState({number:5, seeAll: false})
    // console.log(release)
  return (
    <div className='ml-12 mt-4'>
        <div className='flex items-center justify-between pr-12 mb-4'>
            <h3 className='text-2xl font-bold'>New Releases</h3>
            <p onClick={()=>{
              cardsToRender.seeAll
              ? setCardsToRender({number:5, seeAll: false})
              : setCardsToRender({number:20, seeAll: true})
            }} className='text-sm text-gray-400 font-semibold cursor-pointer hover:text-gray-200'>{cardsToRender.seeAll ? "HIDE" : "SEE ALL" }</p>
        </div>
        
        <div className='flex mt-0 gap-3 2xl:gap-6 flex-wrap'>
                { release !== undefined && release !== null &&
                  release.slice(0, cardsToRender.number).map( releases => {
                    return (
                      <div 
                      onClick={()=>{
                        dispatch(SET_RENDER({
                          home: false,
                          search: false,
                          library: false,
                          playlistPreview: true,                          
                          title: releases.name,
                          img:releases.images[1].url,
                          type: releases.album_type,
                          tracks: releases.total_tracks,
                          releaseQuery: releases.id,
                          background:"#2389b8",
                          from: "releases"
                        }));
                        dispatch(SET_LISTQUERY(releases.name))                        
                      }} 
                      key={releases.id} 
                      className='overflow-hidden card w-44 2xl:w-48 bg-[#181818] py-4 flex flex-col items-center cursor-pointer'
                      >
                        <div className='w-36 2xl:w-40 gap-4 m-auto flex flex-col' >
                          <img className='rounded-md h-[144px] mt-0 w-40 2xl:w-44' src={releases.images[0].url} alt="newreleaseimg"></img>
                          <div className='h-[85px]'>
                            <h4 className='font-semibold'>{releases.name.length < 30 ? releases.name : releases.name.slice(0,30) + "..."}</h4>
                            <p className='text-sm max-h-12 text-gray-400'>{releases.artists[0].name}</p>
                          </div>
                        </div>
                      </div>
                    )
                  } )
                }
        </div>

    </div>
  )
}

export default Releases