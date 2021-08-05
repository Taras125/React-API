import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import style from './pokemon.module.css'
import TableInfo from './TableInfo';

const PokemonList = ({ sprites, name, types, game_indices, weight, moves, stats }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    //Function flip-effect
    function handleClick() {
        setIsFlipped(!isFlipped);
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            {/* Front side */}
            <div className={style.pokemon_card} onClick={handleClick}>
                <div className={style.flip_btn}>
                    <span>&#8618;</span>
                </div>
                <div className={style.img}>
                    <img src={sprites.other.dream_world.front_default} alt="img" width='180px' height='180px' />
                </div>
                <h2>{name}</h2>
                <button className={style.btn_info_type}>{types[0].type.name}</button>
            </div>
            {/* Back side */}
            <div className={style.pokemon_card}>
                <div className={style.flip_btn}>
                    <span onClick={handleClick}>&#10060;</span>
                </div>
                <div className={style.img}>
                    <img src={sprites.other.dream_world.front_default} alt="img" width='180px' height='180px' />
                </div>
                <h2>{name}</h2>
                <TableInfo
                    game_indices={game_indices[0].game_index}
                    type={types[0].type.name}
                    weight={weight}
                    moves={moves[0].move.name}
                    stats={stats[0].base_stat}
                    attack={moves[0].version_group_details[0].move_learn_method.name}
                />
            </div>
        </ReactCardFlip>
    )
}
export default PokemonList
