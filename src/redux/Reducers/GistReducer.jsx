import { ADD_GIST_REQUEST, ADD_GIST_SUCCESS, ADD_GIST_ERROR } from "../Types";



const initialState = {
    loading: true,
     error: "",
     data:[]
}


const GistReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_GIST_REQUEST: return {
            ...state, loading:true
        }

        case ADD_GIST_SUCCESS: return {
            ...state, error: '',
            data: action.payload
        }

        case ADD_GIST_ERROR: return {
            ...state, error: action.payload
        }
    
        default:return state;
    }
}

export default GistReducer


