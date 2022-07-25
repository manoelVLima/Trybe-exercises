import React from 'react';
import './App.css'
import PropTypes from 'prop-types';
// const {id, name, type, averageWeight} = pokemon

class Pokemons extends React.Component {
    render() {
        const { pokemon } = this.props;
        const {id, name, type, averageWeight, image} = pokemon
        return (
            <section className='main-section'>
                <section key={id}>
                    <h3>{name}</h3>
                    <p>{type}</p> 
                    <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
                </section>
                <aside>
                    <img src={image} alt={name} />
                </aside>
            </section>
        )
    }
}
Pokemons.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        averageWeight: PropTypes.shape({
            value: PropTypes.number.isRequired,
            measurementUnit: PropTypes.string.isRequired
        }).isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired
}
export default Pokemons;