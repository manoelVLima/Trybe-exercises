import React from 'react';
import './App.css'

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
export default Pokemons;