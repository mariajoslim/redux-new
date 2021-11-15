
const redux = require('redux')
const reduxcreateStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux').default
const axios = require('axios')

const initiaState = {
    loading: false,
    users: [],
    error: ''
}
const  FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const  FETCH_USERS_SUCESS = 'FETCH_USERS_SUCESS'
const  FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const  fechtUsersRequest = ()=> {
    return{
        type:FETCH_USERS_REQUEST 
    }
}


const  fechtUsersSucess = users => {
    return{
        type:FETCH_USERS_SUCESS,
        payload:users
    }
}


const  fechtUsersFailure = error => {
    return{
        type:FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) =>
{
    switch(action.type){
        case FETCH_USERS_REQUEST:
        return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCESS:
        return {
            ...state,
            loading: false,
            users:action.payload
        }
        case FETCH_USERS_FAILURE:
        return {
            ...state,
            loading: false,
            user:[],
            error: action.payload
        }
    }
}
const fetchUsers  = () =>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(reponse =>{
            //reponse.data is array of users
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSucess(users))
        })
        .catch(error=>{
            //error.message is error description
            dispatch((fetchUsersFailure(error.message))
        })

    }
}


const store = redux.createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())}) 
store.dispatch(fetchUsers())