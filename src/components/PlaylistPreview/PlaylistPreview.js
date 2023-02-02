import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectPlaylistPreview } from '../../features/PlaylistPreviewSlice'
import { selectRender } from '../../features/RenderSlice'
import { selectSearch } from '../../features/SearchSlice'
import { selectQuery } from '../../features/Query'
import { selectList } from '../../features/listQuerySlice'
import {BsFillPlayFill} from 'react-icons/bs'
import {BiTimeFive, BiTime} from 'react-icons/bi'
import  './PlaylistPreview.css'
import { SET_PLAYING } from '../../features/PlayingSlice'


const PlaylistPreview = () => {
    const dispatch = useDispatch()
    const [artistsNames, setArtistsNames] = useState([])
    const render = useSelector(selectRender) 
    const searchResults = useSelector( selectSearch ) 
    const listQuery = useSelector( selectList)
    const query = useSelector(selectQuery)    
    if (searchResults !== null){
        var searchSongs = searchResults.songs?.tracks?.items;                 
        var items = searchSongs.map( item => {
            return(
                item.artists.map( names => {
                    return(
                        names.name
                    )
                } )
            )
        } )        
      } 
  return (
    <div className='w-[82vw] xl'>

       <div className='flex flex-col gap-8 bg-gradient-to-b from-[#2389b8] to-[#12445c] w-full px-5 xl:px-10 pt-4 pb-10 shadow-black shadow-xl m-0'>

            <div className='flex gap-3 md:gap-8 mx-8 items-center'>
                <div>
                    <img src={render.img} alt='playlist-img' className='lg:h-56 2xl:h-[unset] shadow-black shadow-lg' />
                </div>

                <div className='flex flex-col justify-end gap-1 md:gap-5'>
                    <p className='text-gray-300'>{render.type}</p>
                    <h2 className='text-3xl md:text-6xl font-extrabold'>{render.title}</h2>
                    {render.tracks && -<p>{render.tracks} songs </p>}
                </div>
            </div>

       </div>               
      
       <div className='b bg-gradient-to-b from-[#0f374a] via-[#121516] to-[#121212]'>

            <div className='flex justify-between text-gray-300 mx-8 px-3 xl:px-5 2xl:px-7'>
                <div className='flex'>
                    <p className='text-xl ml-0 2xl:ml-1 mr-5'>#</p>
                    <p>TITLE</p>
                </div>
                <BiTime size={24} />
            </div>
            <div className='px-8 xl:px-12 2xl:px-16 text-gray-400 my-1'>
                <hr className='' />
            </div>

            <div className='px-8 xl:px-12 2xl:px-16'>
                {
                    listQuery !== "" && searchSongs &&
                    searchSongs.slice(0, render.tracks).map( (song, index) => {
                        return(
                            <div key={index} className='track flex justify-between px-1'>
                                <div className='flex gap-3 items-center mt-2'>
                                    <div 
                                    className='play' 
                                    onClick={()=>{
                                        dispatch(SET_PLAYING({
                                            source:song.preview_url,
                                            img: song.album.images[1].url,
                                            title: song.name,
                                            isPlaying : false,
                                        }))
                                    }}>
                                        <BsFillPlayFill />
                                    </div>
                                    <p className='number text-gray-300'>{index + 1}</p>                            
                                    <div>
                                        <p className='text-lg font-bold'>{song.name}</p>
                                        <div className='flex text-gray-400 font-semibold text-sm'>                                            
                                            
                                               <p>{items[index].join(", ")}</p>
                                                                                                                                   
                                        </div>
                                    </div>
                                </div>
                                <div className='flex text-gray-400'>
                                    <p>{Math.trunc((song.duration_ms)/60000)}:</p>
                                    {
                                        Math.trunc((song.duration_ms % 60000)/1000)>=10
                                        ? <p>{Math.trunc((song.duration_ms % 60000)/1000)}</p>
                                        : <p>0{Math.trunc((song.duration_ms % 60000)/1000)}</p>
                                    }
                                </div>
                            </div>
                        )
                    } )
                }
            </div>

       </div>

    </div>
  )
}

export default PlaylistPreview

       
