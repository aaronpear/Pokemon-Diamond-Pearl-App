import axios from "axios";
import React from "react";

const TeamMember = (props) => {
    const { name } = props;

    const getSprite = () => {
        let spriteUrl = ''
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => {
                console.log(response.data.sprites.front_default);
                spriteUrl = response.data.sprites.front_default;
            })
            .catch(error => {
                console.error(error);
            });
        console.log(spriteUrl);
        return spriteUrl;

    }

    return (
        <div className='member-container'>
            <h2>{name}</h2>
            <img src={`${getSprite()}`} alt={name} />
        </div>
    )
}

export default TeamMember;