import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST , FETCH_USERS_SUCESS} from "./userType"

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }

            case FETCH_USERS_SUCESS:
            return{
                ...state,
                loading:false,
                users: action.payload,
                error:''
            }

            case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading:false,
                users: [],
                error: action.payload
            }
    }
}

export default reducer