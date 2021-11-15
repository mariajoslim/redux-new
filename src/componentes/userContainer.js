import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux'
import { FETCH_USERS_SUCESS } from '../redux/user/userType'


function userContainer({ , userDatafetchUsers }){
    useEffect(() => {
        fetchUsers()
    }, [])
    return
        userData.loading ?(
            <h2>Loading</h2>
        ): userData.error ?(
            <h2>{userData.error}</h2>
        ) :(
            <div> 
                <h2>Usr list </h2>
            </div>
            {
                userData && userData.user && userData.users.map(user => <p>{user.name}</p>) 
            }
        )

} 
const mapStateToProps = state =>{
    return {
        userData: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return{
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export   default connect(mapStateToProps, mapDispatchToProps)(userContainer)