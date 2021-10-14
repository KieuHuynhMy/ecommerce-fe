import React, { useEffect, useRef, useContext } from "react";
import persons from "../Persons/Persons";
import classes from './Cookpit.module.css';
import AuthContext from "../../context/auth-context";

const cookpit = props => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cookpit.js] use useEffect');
        // Http requests ...
        // setTimeout(() => {
        //     alert('Save data to the cloud')
        // }, 1000);
        toggleBtnRef.current.click();
        // }, [props.persons]);
    }, []);

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    return (
        <div className={classes.Cookpit}>
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button ref={toggleBtnRef}
                className={classes.btnClass}
                onClick={props.clicked}>Toggle Persons</button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    )
}

export default cookpit;