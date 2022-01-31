import axios from "axios"
import { POPULAR_MOVIES,GET_MOVIES } from "../pages/api/imdb"

const initialState = {
    allItems: {},
    searchedResults: {},
    showSearch: false,
    loadingStatus: "idle" 

}

const invalid_img = "https://imdb-api.com/images/original/nopicture.jpg"

export const INITIAL_LOADED = 'movies/initial-loaded'
export const SEARCH_MOVIES = 'movies/search'
export const ITEMS_LOADING = 'movies/loading'
export const ITEMS_LOADED = "movies/loaded"
export const RESET = "movies/reset"

const movieItemsReducer = (state = initialState, action) => {
    switch(action.type){
        case INITIAL_LOADED: {
            const items = action.payload.reduce((obj,item) => {
                if(item.image !== invalid_img){
                    obj[item.id] = item
                }
                return obj
            },{})
            return {...state, allItems: items}
        }
        case SEARCH_MOVIES: {
            const items = action.payload.reduce((obj, item) => {
                if(item.image !== invalid_img) {
                    obj[item.id] = item
                }
                return obj
            }, {})
            return {...state, searchedResults: items, showSearch: true}
        }
        case ITEMS_LOADING: return {...state, loadingStatus: "loading"}
        case ITEMS_LOADED: return {...state, loadingStatus: "idle"}
        case RESET: return {...state, showSearch: false}
        default: return state
    }
}

export const fetchInitalData = async (dispatch,getState) => {
    dispatch({type: ITEMS_LOADING})
    const res = await axios.get(POPULAR_MOVIES);
    dispatch({type: INITIAL_LOADED, payload: res?.data?.items})
    dispatch({type: ITEMS_LOADED})
}

export const getSearhResults = (text) => {
    return async (dispatch,getState) => {
        dispatch({ type: ITEMS_LOADING })
        const res = await axios.get(`${GET_MOVIES}${text}`)
        dispatch({type: SEARCH_MOVIES, payload: res?.data?.results})
        dispatch({ type: ITEMS_LOADED })
    }
}

export default movieItemsReducer