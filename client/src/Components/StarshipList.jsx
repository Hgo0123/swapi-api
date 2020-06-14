import React from 'react';

const StarshipList = ({ user }) => {
    return (
        <ul className="list">
            <li className="list__elem"><div>Model</div><div>{user.model} cm</div></li>
            <li className="list__elem"><div>Starship class</div><div>{user.starship_class}</div></li>
            <li className="list__elem"><div>Manufacturer</div><div>{user.manufacturer} kg</div></li>
            <li className="list__elem"><div>Cost</div><div>{user.cost_in_credits}</div></li>
            <li className="list__elem"><div>Taille</div><div>{user.length}</div></li>
            <li className="list__elem"><div>Crew</div><div>{user.crew}</div></li>
            <li className="list__elem"><div>Passengers</div><div>{user.passengers}</div></li>
            <li className="list__elem"><div>Cargo capacity</div><div>{user.cargo_capacity}</div></li>
            <li className="list__elem"><div>Consumables</div><div>{user.consumables}</div></li>
            <li className="list__elem"><div>Hyperdrive rating</div><div>{user.hyperdrive_rating}</div></li>
        </ul>
    )
}

export default StarshipList;