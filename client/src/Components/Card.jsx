import React from 'react';
import '../App.scss';



const Card = ({ user }) => {
    return (
        <div key={user.name} className='card'>
            <h3>{user.name}</h3>
            <p>Height : {user.height} cm</p>
            <p>Weight : {user.mass} kg</p>
            <p>Hair color : {user.hair_color === 'n/a' ? 'It\'s a robot' : user.hair_color}</p>
            <p>Skin color : {user.skin_color}</p>
            <p>Eye color : {user.eye_color}</p>
        </div>
    )
}
export default Card;