import axios from 'axios                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                '
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCESS , FETCH_USER_FAILURE} from "./userType"

export const Fetch_User_Request = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const Fetch_Sucess = users => {
    return {
        type: FETCH_USERS_SUCESS,
        payload: users
    }
}

export const Fetch_User_Failure = error => {

    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {

    return (dispatch ) => { 
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typecode.com/users')
        .then(response =>{
            const users = response.data
            dispatch(fetchUsersSucess(users))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        })


    }
}