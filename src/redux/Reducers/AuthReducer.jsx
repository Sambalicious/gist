
import { SIGN_IN_SUCCESS,SIGN_UP_ERROR, SIGN_UP_SUCCESS, SIGN_IN_ERROR } from '../Types';


const initialState = {
    loading: true,
    error: ''
}
const AuthReducer = (state=initialState, action) => {
    switch (action.type) {
        case SIGN_IN_REQUEST: return {
            ...state, loading: true
        }
        case SIGN_IN_SUCCESS:
            return {
                ...state, loading:false, error: null
            }
            case SIGN_IN_ERROR: return {
                ...state,loading:false, error: action.payload
            }
            case SIGN_UP_REQUEST: return{
                ...state, loading: true
            }
            case SIGN_UP_SUCCESS: return {
                ...state, loading:false, error: null
            }

            case SIGN_UP_ERROR: return {
                ...state, loading: false, error: action.payload
            }
            
            
    
        default: return state
    }
    
}

export default AuthReducer
