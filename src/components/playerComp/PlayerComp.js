import React, { useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BsPlayCircle } from 'react-icons/bs'
import { AiOutlinePauseCircle } from 'react-icons/ai'
import { selectPlaying, SET_PLAYING } from '../../features/PlayingSlice'
import { useDispatch } from 'react-redux'
import '../playerComp/playerComp.css'
import {BiVolumeLow} from 'react-icons/bi'
import {FiVolumeX} from 'react-icons/fi'

const PlayerComp = () => {
    const dispatch = useDispatch()
    const [percent, setPercent] = useState(0)
    const [position, setPosition] = useState(0)
    const [marginLeft, setMarginLeft] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [audioVolume, setAudioVolume] = useState(100)
    const [audioMute, setAudioMute] = useState(true)

    const audioSrc = useSelector(selectPlaying)
    const rangeRef = useRef()

    useEffect(()=>{
      const centerThumb = (0.2) * percent * (-1)
      setMarginLeft(centerThumb)
      setPosition(percent)
      setPercent((currentTime/duration)*100)
      songElem.current.volume = audioVolume/100

    }, [percent, currentTime, duration, audioVolume])
    
    if (audioSrc != null){   
        var src =audioSrc.source 
        var img = audioSrc.img
        var title = audioSrc.title
        var artist= audioSrc.artist
        var isPlaying = audioSrc.isPlaying
  }
    const songElem = useRef()
    // const [isPlaying, setIsPlaying] = useState(true)
    const playHandle = ()=> {        
        // setIsPlaying(!isPlaying)
        // dispatch(SET_ISPLAYING({isPlaying: !isPlaying}))
        dispatch(SET_PLAYING({
            source:src,
            img: img,
            title: title,                        
            isPlaying:!isPlaying
        }))
        !isPlaying ? songElem.current.play() : songElem.current.pause()
        setPercent((currentTime/duration)*100)
        songElem.current.volume = audioVolume/100
        
    }
    const rangeHandler = (e)=>{
      setPercent(e.target.value)
    }
  return (
    
    <div>

    <div className='w-full fixed bottom-0 h-[16vh] mt-2 bg-[#181818] md:pr-14 px-3 py-4'>
      <div className='flex items-center justify-between gap-5'>

          <div className='flex items-center gap-2 w-[150px] md:w-[250px] lg:w-[350px]'>
            { img? <img className='w-12' src={ img } alt="playin-img" /> : null}
            { title && <p className='text-white hidden md:block'>{ title.length < 28 ? title : title.slice(0, 28) + "..." }</p>}                            
          </div>

          <div className='flex flex-col gap-2 items-center'>

          <div className=''>
            <audio 
                src={src}
                ref={songElem}
                onLoadedData={(e)=> {                  
                  setDuration(e.currentTarget.duration)
                }}
                onTimeUpdate={(e)=>{
                  setCurrentTime(e.currentTarget.currentTime)
                }}
            />
            {
              isPlaying 
              ? <div className='text-white mr-4' onClick={playHandle}> <AiOutlinePauseCircle size={34} /> </div>
              : <div className='text-white mr-4' onClick={playHandle}> <BsPlayCircle size={34} /> </div>
            }
          </div>             
            
            <div className='text-white slider-container w-[90px] md:w-[250px] xl:w-[400px] relative mr-1'>
              <div className='progress-bar-cover' style={{width:`${position}%`}}></div>
              <div className='thumb' style={{left:`${position}%`, marginLeft:`${marginLeft}px`}} ></div>
              <input ref={rangeRef} onChange={rangeHandler} className='range bg-[#1db954] w-full h-[4px] my-0 mx-auto opacity-100' type="range" step="0.01"></input>
              <p className='absolute text-gray-500 text-sm -left-9 top-0'>0:{Math.trunc(currentTime)<10 ? "0"+ Math.trunc(currentTime) : Math.trunc(currentTime)}</p>          
            </div>

          </div>

          <div className=' flex items-center gap-1 w-[160px]'>
           {audioMute 
           ?<BiVolumeLow onClick={()=>{
            setAudioMute(!audioMute)
            songElem.current.muted= audioMute
            }} color='rgb(107, 114, 128)' size={24}/>

           : <FiVolumeX onClick={()=>{
            setAudioMute(!audioMute)
            songElem.current.muted = audioMute
           }} color='rgb(107, 114, 128)' size={24} />
           
            }
           <input onChange={(e)=>{
              console.log(e.target.value, "from volume")
              setAudioVolume(e.target.value)
           }} className='volumeRange w-[80px] md:w-[150px]' type="range" step="10"></input>
          </div>
          
      </div>
    </div>


</div>
  )
}

export default PlayerComp