
import React from 'react'
import { connect } from '/react-redux'
import { buyIceCream } from '../redux'


function iceCreamContainer(props){
return(
    <div>
        <h2>Number of icream{props.numOficeCream}</h2>
        <button onClick={props.buyIceCream>Buy IceCream</button>
    </div>        
)
const mapStateToProps = state =>{
    return{
        numOficeCream: state.iceCream.numOfceCream
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream:() => dispatch ())
    }
}
}

export default connect(mapStateToProps, mapDispatchProps)(iceCreamContainer)