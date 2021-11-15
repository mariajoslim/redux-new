import {BUY_ICECREAM} from './IceCreamType'

const initialState{
    numOFIceCream:20
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOFIceCream:state.numOFIceCream -1
        }
        default: return state
    }


}
export default iceCreamReducer
