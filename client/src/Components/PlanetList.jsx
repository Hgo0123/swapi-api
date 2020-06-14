import React from 'react';
import { Component } from 'react';

class PlanetList extends Component {
    state = {
        userResidents: []
    }
    componentDidMount() {
        this.fetchData(this.props.user.residents)
    }

    renderData = (data) => {
        const user = [...this.state.userResidents]
        const format = <li>{data.name}</li>
        user.push(format)
        this.setState({
            userResidents: user
        })
    }

    fetchData = (data) => {
        Object.values(data).forEach(element => (
            fetch(element)
                .then(res => res.json(res))
                .then(users => this.renderData(users))
        ))
    }

    render() {
        return (
            <ul className="list" >
                <li className="list__elem"><div>Rotation period</div><div>{this.props.user.rotation_period}</div></li>
                <li className="list__elem"><div>Orbital period</div><div>{this.props.user.orbital_period}</div></li>
                <li className="list__elem"><div>Diameter</div><div>{this.props.user.diameter}</div></li>
                <li className="list__elem"><div>Climate</div><div>{this.props.user.climate}</div></li>
                <li className="list__elem"><div>Gravity</div><div>{this.props.user.gravity}</div></li>
                <li className="list__elem"><div>Terrain</div><div>{this.props.user.terrain}</div></li>
                <li className="list__elem"><div>Population</div><div>{this.props.user.population}</div></li>
                <li className="list__elem"><div>Residents</div><div className='wrap'>{this.state.userResidents.length > 0 ? this.state.userResidents : 'Nobody lives here'}</div></li>
            </ul>
        )
    }
}

export default PlanetList;