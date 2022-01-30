import axios from "axios"
import { POPULAR_MOVIES,GET_MOVIES } from "../pages/api/imdb"

const initialState = {
    allItems: {},
    searchedResults: {}
}

const INITIAL_LOADED = 'movies/initial-loaded'
const SEARCH_MOVIES = 'movies/search'

const movieItemsReducer = (state = initialState, action) => {
    switch(action.type){
        case INITIAL_LOADED: {
            const items = action.payload.reduce((obj,item) => {
                obj[item.id] = item
                return obj
            },{})
            return {allItems: items, searchedResults: {}}
        }
        case SEARCH_MOVIES: {
            const items = action.payload.reduce((obj, item) => {
                obj[item.id] = item
                return obj
            }, {})
            return {...state, searchedResults: items}
        }
        default: return state
    }
}

export const fetchInitalData = async (dispatch,getState) => {
    const res = await axios.get(POPULAR_MOVIES);
    dispatch({type: INITIAL_LOADED, payload: res?.data?.items})
}

export const getSearhResults = (text) => {
    return async (dispatch,getState) => {
        const res = await axios.get(`${GET_MOVIES}${text}`)
        dispatch({type: SEARCH_MOVIES, payload: res?.data?.results})
    }
}

export default movieItemsReducer