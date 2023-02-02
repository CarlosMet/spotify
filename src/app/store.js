import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/UserSlice'
import tokenReducer from '../features/Token'
import releaseReducer from '../features/ReleasesSlice'
import recentReducer from '../features/Recent'
import playingReducer from '../features/PlayingSlice'
import  isPlayingReducer  from '../features/IsPlayingSlice'
import searchReducer from '../features/SearchSlice'
import queryReducer from '../features/Query'
import renderReducer  from '../features/RenderSlice'
import playlistInfoReducer from '../features/PlaylistInfoSlice'
import playlistPreviewReducer from '../features/PlaylistPreviewSlice'
import listQueryReducer from '../features/listQuerySlice'
import favoritesReducer from '../features/favoritesSlice'


export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,
        release: releaseReducer,
        recent: recentReducer,
        playing: playingReducer,
        isplaying: isPlayingReducer,
        search: searchReducer,
        query: queryReducer,
        render:renderReducer,
        playlistInfo: playlistInfoReducer,        
        listQuery: listQueryReducer,
        favorites: favoritesReducer
    }
})