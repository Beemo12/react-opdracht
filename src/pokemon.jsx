import React, { useState, useEffect } from 'react';
import styles from './pokemon.module.css';

export function Pokemon() {
    const [pokemon, setPokemon] = useState(null);

    const randomId = Math.floor(Math.random() * 1025 + 1);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then(response => response.json())
        .then(data => {
            setPokemon(data);
        })
    }, [])

    if (pokemon === null) {
        return (
            <section className={styles.pokemon}>
                <h2>Fetching Pokemon</h2>
            </section>
        )
    } else {
        return (
            <section className={styles.pokemon}>
                <h2 className={styles.name}>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default}/>
                <div className={styles.types}>
                    {pokemon.types.map((typeInfo, index) => (
                        <span key={index} className={`${styles.type} ${styles[typeInfo.type.name]}`}>
                            {typeInfo.type.name}
                        </span>
                    ))}
                </div>
            </section>
        )
    }
}