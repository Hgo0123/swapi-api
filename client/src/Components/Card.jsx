import React from 'react';
import { Redirect } from 'react-router-dom'
import { Component } from 'react';

import './Card.scss';




class Card extends Component {
    state = {
        goToUserPage: false,
    }
    handleClick = (event) => {
        event.preventDefault()
        this.setState({
            goToUserPage: true
        })
    }
    render() {
        if (this.state.goToUserPage === true) {
            return <Redirect push to={{
                pathname: `/${this.props.user.name}`,
                state: { user: this.props.user, request: this.props.request }
            }}></ Redirect>
        }
        return (
            <li className="list__elem"> {this.props.user.name} < div className='details' > <a onClick={this.handleClick} className='list__elem__link'>Voir plus...</a></div ></li >
        )

    }
}
export default Card;