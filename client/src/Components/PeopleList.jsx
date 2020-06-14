import React, { Component } from 'react';

class PeopleList extends Component {
    state = {
        userFilms: [],
        userHomeworld: []
    }
    componentDidMount() {
        this.fetchData(this.props.user.films)
        this.fetchDataOnce(this.props.user.homeworld)
    }

    renderData = (data) => {
        const film = [...this.state.userFilms]
        const homeworld = [...this.state.userHomeworld]
        const formatHome = <li>{data.name}</li>
        const format = <li>{data.title}</li>
        film.push(format)
        homeworld.push(formatHome)
        this.setState({
            userFilms: film,
            userHomeworld: homeworld
        })
    }

    fetchData = (data) => {
        Object.values(data).forEach(element => (
            fetch(element)
                .then(res => res.json(res))
                .then(users => this.renderData(users))
        ))
    }
    fetchDataOnce = (data) => {
        fetch(data)
            .then(res => res.json(res))
            .then(users => this.renderData(users))
    }

    render() {
        return (
            <ul className="list">
                <li className="list__elem"><div>Height</div><div>{this.props.user.height} cm</div></li>
                <li className="list__elem"><div>Weight</div><div>{this.props.user.mass} kg</div></li>
                <li className="list__elem"><div>Hair color</div><div>{this.props.user.hair_color === 'n/a' ? 'It\'s a robot' : this.props.user.hair_color}</div></li>
                <li className="list__elem"><div>Skin color</div><div>{this.props.user.skin_color}</div></li>
                <li className="list__elem"><div>Eye color</div><div>{this.props.user.eye_color}</div></li>
                <li className="list__elem"><div>Birth year</div><div>{this.props.user.birth_year}</div></li>
                <li className="list__elem"><div>Gender</div><div>{this.props.user.gender === 'n/a' ? 'It\'s a robot' : this.props.user.gender}</div></li>
                <li className="list__elem"><div>Homeworld</div><div>{this.state.userHomeworld}</div></li>
                <li className="list__elem"><div>Films</div><div>{this.state.userFilms}</div></li>
            </ul>
        )
    }
}

export default PeopleList;