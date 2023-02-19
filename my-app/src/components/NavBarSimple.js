import React from 'react'
import css from './css/NavBarSimple.module.css'

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button: 'Sign In',
            message: 'Hello, Guest!',
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State', prevState);
            console.log('Previous Properties', prevProps);
            return {
                button: prevState.button === "Sign In" ? "Sign Out" : "Sign In",
                message: prevState.message === "Hello, Guest!" ? "Welcome Back, User!" : "Hello, Guest!",
            }
        })
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>
                    {this.state.message}
                </span>
                <button onClick={() => this.handleClick()}>
                    {this.state.button}
                </button>
            </div>
        )
    };
};


export default NavBarSimple