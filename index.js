import redux from 'redux'
const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const logger = reduxLogger.createLogger()
console.log('From index.js')

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM= 'BUY_ICECREAM'


function buyCake(){
    return
{
    type: BUY_CAKE,
    info:'First redux action'
}
}

function buyIcecream (){
    return
{
    type: BUY_ICECREAM
    info:'First redux action'
}
}

//(previousState, action) => newState

//const initialState= {
   // numOfCakes:10,
    //numOfIceCream:20
//}
const initialCakeState = {
    numOfCakes:10
}
const initialIceCreamstate = {
    numOfIceCream:20
}




const cakereducer = (state= initialCakeState,action) => {
    switch (action.type){
       case BUY_CAKE: return{
        ...state,
           numOfCakes= numOfCakes-1

   }
    default: return state

const IceCreamreducer = (state= initialState,action) => {
    switch (action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCream= numOfIceCream-1

    }
    default: return state
    
}
}

const rootReducer = ({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store = createStore(rootReducer, rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()