import React from 'react'
import {connect} from 'react-redux'

function itemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}> Buy Itens</button>
        </div>
    )
}
const mapStateToProps = (state, owProps) => {
    const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : stateiceCream.numOfIceCreams

    return{
        item: itemState
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake()) 
    : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}
export default connect(null, mapDispatchToProps)(itemContainer)
