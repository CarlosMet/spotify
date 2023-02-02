import React from 'react'
import {BsSpotify} from 'react-icons/bs'
import logo from './undraw_audio_player_re_cl20.svg'

const ID = `7bfee102098a4b19ac020b017f63905c`
const redirectUri = "http://localhost:3000/"
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

const spotifyApiUrl = `https://accounts.spotify.com/authorize?client_id=${ID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`

const Login = () => {       

  return (
    <div className='bg-black h-[100vh] overflow-hidden'>
        
        <div className='text-white flex gap-1 items-center pt-4 ml-8'>
            <BsSpotify size={40} />
            <h1 className='text-3xl font-extrabold tracking-tight'>Spotify-App</h1>
        </div>

        <div className='flex flex-col-reverse items-center justify-center gap-12 h-[100%]'>

            <div className='flex flex-col justify-center gap-10 items-center'>               
                
                <button className='rounded-2xl bg-[#1db954] px-16 py-1 text-xl font-semibold'><a href={spotifyApiUrl}> Log in with Spotify </a></button >
            </div>

            <div className=''>
                <img className='w-[13rem] md:w-[15rem]' src={logo} alt='Spotify-App'></img>
            </div>
            
        </div>
            
    </div>

)
}

export default Login

        


