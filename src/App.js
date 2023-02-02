
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/login/Login';
import Player from './components/player/Player';
import { selectUser, SET_USER } from './features/UserSlice';
import getToken from './spotify/getToken';
import SpotifyWebApi from 'spotify-web-api-js'
import { selectToken, SET_TOKEN } from './features/Token';
import { SET_PLAYLIST } from './features/PlaylistSlice';
import { SET_RELEASE, selectRelease } from './features/ReleasesSlice';
import { SET_RECENT } from './features/Recent';
import { SET_SEARCH } from './features/SearchSlice';
import { SET_QUERY, selectQuery } from './features/Query';
import { selectRender } from './features/RenderSlice';
import { selectList, SET_LISTQUERY } from './features/listQuerySlice';
import { SET_FAVORITES } from './features/favoritesSlice';

const spotify = new SpotifyWebApi();

function App() {
  const [favoriteArtist, setFavoriteArtist] = useState([])
  const [favoriteTrack, setFavoriteTrack] = useState([])
  const [artists, setArtists] = useState({})
  const [tracks, setTracks] = useState({})
  const [album, setAlbum] = useState({})
  const [playlist, setPlaylist] = useState({})
  const query = useSelector(selectQuery)
  const listQuery = useSelector( selectList)
  const render = useSelector(selectRender)
  const dispatch = useDispatch()  
  const user = useSelector(selectUser)   
    
  useEffect(()=>{
    const hash = getToken()
    const spotifyToken = hash.access_token

    if( spotifyToken ) {
      dispatch(SET_TOKEN(spotifyToken))
      spotify.setAccessToken(spotifyToken)      
      spotify.getMe().then( user1=> dispatch(SET_USER(user1)) )      
      spotify.getMyRecentlyPlayedTracks().then( res=> {        
        const {items} = res
        dispatch(SET_RECENT(items))     
      })
      
      spotify.getUserPlaylists().then( playlists => dispatch(SET_PLAYLIST(playlists)) )
      spotify.getNewReleases().then( releases => {
        dispatch(SET_RELEASE(releases))        
      }) 
      
      if (query !== ""){

        spotify.searchTracks(query).then( result => {
          setTracks(result)
          dispatch(SET_SEARCH({songs: tracks, artist: artists}))          
        } )

        spotify.searchArtists(query).then( result => {
          setArtists( result )
          dispatch(SET_SEARCH({songs: tracks, artist: artists}))          
        } )
        
      }     
      if (listQuery !== ""){
        spotify.searchTracks(listQuery).then( res => {
          dispatch(SET_SEARCH({songs: res }))          
        } )
      }                  
      
      spotify.getMyTopArtists("").then( res => {
        setFavoriteArtist(res.items)        
      } )
      spotify.getMyTopTracks().then( res => {
        setFavoriteTrack(res.items)
        dispatch(SET_FAVORITES({singers:favoriteArtist, songs: favoriteTrack}))
      } )          
            
      setTimeout(() => {
        window.location.hash = ""
        
      }, 3600000);     
    } 
            
    
  }, [dispatch, query, render])
  return (
    <div className="App">
      {user != null 
        ? <Player />
        : <Login />
      }
    </div>
  );
}

export default App;
