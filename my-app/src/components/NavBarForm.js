import React, { Component } from 'react'
import css from './css/NavBarSimple.module.css'
import NavBarChild from './NavBarChild'
// import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,
         button: 'Login',
      }
    }

    handleLogin = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false : true
        }),  () => console.log(this.state.isLoggedIn))
    }

    // handleLogin = () => {
    //     this.setState((prevState, prevProps) => {
    //         console.log('Previous State', prevState);
    //         console.log('Previous Properties', prevProps);
    //         return {
    //             button: prevState.button === 'Login' ? 'Logout' : 'Login',
    //             isLoggedIn: prevState.isLoggedIn === 'false' ? 'true' : 'false',
    //         }
    //     })
    // }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <NavBarChild 
                isLoggedIn={this.state.isLoggedIn}
                handleLogin={this.handleLogin}
                />
            </div>
        )
    }
}

export default NavBarForm
