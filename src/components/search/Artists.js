import React from 'react'
import { useSelector } from 'react-redux'
import { selectSearch } from '../../features/SearchSlice'
import { selectQuery } from '../../features/Query'
import { useDispatch } from 'react-redux'
import { selectList, SET_LISTQUERY } from '../../features/listQuerySlice'
import { SET_RENDER } from '../../features/RenderSlice'

const Artists = () => {
    const dispatch = useDispatch()
    const searchResults = useSelector( selectSearch )
    const query = useSelector( selectQuery )
    const listQuery = useSelector( selectList )
    if (searchResults !== null && searchResults !== undefined){
        var searchArtists = searchResults.artist?.artists?.items        
    }
  return (
    
    <div className='artists'>
        {query !== "" && 
            <div className='flex flex-col my-6 bg-[#181818] mr-6 lg:mr-0'>
            {query !== "" ? <h3 className='text-2xl font-bold mx-4'>Artists</h3> : null}
            <div className='grid grid-cols-2 xl:grid-cols-3 my-8 justify-between pl-6 py-4 w-[100%] place-items-center gap-2'>
                {(query !== "" && searchArtists )
                    ? searchArtists.slice(0,6).map( artist => {
                        return(
                            <div key={artist.name} className='flex flex-col items-center w-16 mb-6 xl:mb-16'>
                                <img 
                                   onClick={()=>{
                                    dispatch(SET_RENDER({
                                      home: false,
                                      search: false,
                                      library: false,
                                      playlistPreview: true,                          
                                      title: artist.name,
                                      img:artist.images[1].url,
                                      type: artist.type,                                      
                                      releaseQuery: artist.id,
                                      background:"#2389b8",
                                      from: "search"
                                    }));
                                    dispatch(SET_LISTQUERY(artist.name));
                                    console.log(artist)                        
                                  }}
                                 className='w-10 h-10 lg:w-14 lg:h-14 rounded-full cursor-pointer' 
                                 alt='astist-img' 
                                 src={artist.images[2].url} />
                                <p className='w-28 font-semibold mt-4 overflow-hidden text-center'>{artist.name.length>16 ?artist.name.slice(0,16) + "..." :artist.name}</p>
                            </div>
                        )
                    } )
                    : null
                }
            </div>
        </div> }
    </div>
    
  )
}

export default Artists