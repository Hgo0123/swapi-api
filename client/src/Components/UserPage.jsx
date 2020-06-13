import React, { Component } from 'react'
import './userPage.scss'


class UserPage extends Component {
    render() {
        const { user } = this.props.location.state
        return (
            <div className="list-container" >
                <h2 className='title'>{user.name}</h2>
                <ul className="list">
                    <li className="list__elem"><div>Height</div><div>{user.height} cm</div></li>
                    <li className="list__elem"><div>Weight</div><div>{user.mass} kg</div></li>
                    <li className="list__elem"><div>Hair color</div><div>{user.hair_color === 'n/a' ? 'It\'s a robot' : user.hair_color}</div></li>
                    <li className="list__elem"><div>Skin color</div><div>{user.skin_color}</div></li>
                    <li className="list__elem"><div>Eye color</div><div>{user.eye_color}</div></li>
                    <li className="list__elem"><div>Birth year</div><div>{user.birth_year}</div></li>
                    <li className="list__elem"><div>Gender</div><div>{user.gender === 'n/a' ? 'It\'s a robot' : user.gender}</div></li>
                </ul>
            </div >
        )
    }
}

export default UserPage;