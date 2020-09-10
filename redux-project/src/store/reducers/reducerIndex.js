import { FETCH_CHARS,
  FETCH_CHARS_SUCCESS,
  FETCH_CHARS_ERROR } 
  from '../actions/actionIndex'

const initialState = {
    characters: [],
    loadingChars: true
}


export default (state = initialState, action={}) => {
    switch(action.type) {
      case FETCH_CHARS:
        return {
          ...state,
          loadingChars: true
        }
      case FETCH_CHARS_ERROR:
        return {
          ...state,
          loadingChars: false
        }
      case FETCH_CHARS_SUCCESS:
        return {
          ...state,
          characters:  action.payload,
          loadingChars: false

        }
      default:
          return state
    }
}