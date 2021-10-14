import React, { Component } from "react";
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import AuthContext from "../../../context/auth-context";
import Aux from "../../../hoc/Aux";

class Person extends Component {
    // componentDidMount() {
    //     document.querySelector('input').focus();
    // }
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // document.querySelector('input').focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render() {
        return (
            <Aux>
                <div className={classes.Person} >
                    <AuthContext.Consumer>
                        {context => context.authenticated ? <p>Authenticate</p> : <p>Please log in</p>}
                    </AuthContext.Consumer>
                    <p onClick={this.props.clicked}>
                        I'm {this.props.name} and I am {this.props.age} years old
                    </p>
                    <input type="text"
                        onChange={this.props.changed}
                        value={this.props.name}
                        ref={this.inputElementRef}
                    />
                </div>
            </Aux>
        )
    }
}

Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;