import React from 'react'
function NavBarChild(props) {
    return (
        props.isLoggedIn ?
        <form>
            <label htmlFor = "username">Username:</label>
            <input placeholder="username" id="username"/>
        
            <label htmlFor = "password">Password:</label>
            <input placeholder="password" id="password"/>
            <button  onClick={props.handleLogin}>Submit</button>
        </form>
        :
        <button onClick={props.handleLogin}>Login</button>
    )
}

export default NavBarChild