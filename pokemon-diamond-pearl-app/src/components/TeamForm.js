import React from "react";
import TeamMember from "./TeamMember";
import axios from "axios";

const TeamForm = ({ props }) => {

    const randIndex = () => {
        return Math.floor(Math.random() * 150);
    }

    const getSprite = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
            .then(response => {
                console.log(response.data.sprites.front_default)
                return response.data.sprites.front_default;
            })
            .catch(error => {
                console.error(error);
            });
    }
    console.log(getSprite());

    return (
        <div className='team-container'>
            <div className='team-slot'>
                <TeamMember name={props[randIndex()].pokemon_species.name} imgUrl={getSprite()}/>
            </div>
            <div className='team-slot'>
                <TeamMember name={props[randIndex()].pokemon_species.name} imgUrl={getSprite()}/>
            </div>
            <div className='team-slot'>
                <TeamMember name={props[randIndex()].pokemon_species.name} imgUrl={getSprite()}/>
            </div>
            <div className='team-slot'>
                <TeamMember name={props[randIndex()].pokemon_species.name} imgUrl={getSprite()}/>
            </div>
            <div className='team-slot'>
                <TeamMember name={props[randIndex()].pokemon_species.name} imgUrl={getSprite()}/>
            </div>
            <div className='team-slot'>
                <TeamMember name={props[randIndex()].pokemon_species.name} imgUrl={getSprite()}/>
            </div>
        </div>
    )
}

export default TeamForm;