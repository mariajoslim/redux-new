
import React , { useState } from 'react'
import { connect } from '/react-redux'
import { buyCake } from '../redux'


function CakeContainer(props){
    const[number, setNumber] = useState(1)
return(
    <div>
        <h2>Number of cakes{props.numOfCakes}</h2>
        <input type = 'text' value ={ number} onChange = { e => setNumber(e.target.value)}/>
        <button onClick= {() => props.buyCake(number)}>Buy {number}Cake</button>
    </div>        
)
const mapStateToProps = state => {
    return{
        numOficeCream: state.cakes.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake:() => dispatch (buyCake)
    }
}
}
export default connect(mapStateToProps, mapDispatchProps)(newCakeContainer)