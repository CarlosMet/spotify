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

const getToken = ()=>{
    return window.location.hash.substring(1).split("&")
    .reduce((initial, item)=>{
        let parts = item.split("=")
        initial[parts[0]] =decodeURIComponent(parts[1])
        return initial
    }, {})
} 

export default getToken