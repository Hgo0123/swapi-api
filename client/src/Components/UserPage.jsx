import React, { Component } from 'react'
import './userPage.scss'

import PlanetList from './PlanetList'
import StarshipList from './StarshipList'
import PeopleList from './PeopleList'


class UserPage extends Component {

    renderList = () => {
        const { user, request } = this.props.location.state
        if (request === 'people') {
            return <PeopleList user={user} />
        } else if (request === 'planets') {
            return <PlanetList user={user} request={request} />
        } else {
            return <StarshipList user={user} />
        }
    }

    render() {
        const { user } = this.props.location.state
        return (
            <div className="list-container" >
                <h2 className='title'>{user.name}</h2>
                {this.renderList()}
            </div >
        )
    }
}

export default UserPage;