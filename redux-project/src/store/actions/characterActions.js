import axios from 'axios'

// ACTION TYPES
export const FETCH_CHARS = "FETCH_CHARS"
export const FETCH_CHARS_SUCCESS = "FETCH_CHARS_SUCCESS"
export const FETCH_CHARS_ERROR = "FETCH_CHARS_ERROR"

// STATE MACHINE --> What will the states be when requesting/ awaiting/ 
// retrieving data 

//ACTION CREATORS
export const fetchChars = () => {
    return (dispatch) => {
        dispatch({type: FETCH_CHARS});
        axios.get("https://rickandmortyapi.com/api/character/?page=7")
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_CHARS_SUCCESS, payload: res.data.results})
        })
        .catch(error => {
            console.error(error)
            dispatch({ type: FETCH_CHARS_ERROR, payload: []})
        })
    }
}


// FETCH_CHARS => FETCH_CHARS_SUCCESS => FETCH_CHARS_ERROR
// Define action types
// build our action creator
// send request
// handle our states for us