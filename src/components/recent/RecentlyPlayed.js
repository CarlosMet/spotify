import React from 'react'
import { useDispatch } from 'react-redux'
import { SET_PLAYING, selectPlaying } from '../../features/PlayingSlice'
import { useSelector } from 'react-redux'
import { selectRecent } from '../../features/Recent'

const RecentlyPlayed = () => {
    const dispatch = useDispatch()
    const recentlyPlayed = useSelector(selectRecent)
  return (
    <div className='ml-12'>
        
        <div>
              <h3 className='mt-6 text-2xl font-bold'>Recently played</h3>
              <div className='recentplayed flex gap-3 2xl:gap-6 mt-6 flex-wrap'>
                {recentlyPlayed.slice(0, 5).map( item => {
                  return (
                   <div className='cursor-pointer w-44 bg-[#181818] py-6 grid place-content-center' key={item.played_at} onClick={()=> {                    
                    const source = item.track.preview_url                    
                    dispatch(SET_PLAYING({
                        source:source,
                        img: item.track.album.images[1].url,
                        title: item.track.name,
                        isPlaying : false,
                    }))                    
                }}>

                      <div className='' >
                        <img className='w-40 mb-4 rounded-md' src={ item.track.album.images[1].url } alt="album-img" />
                        <p className='font-bold'>
                            {item.track.name}
                        </p>                        
                    </div>

                   </div>
                  )
                } )}
              </div>

            </div>



    </div>
  )
}

export default RecentlyPlayed