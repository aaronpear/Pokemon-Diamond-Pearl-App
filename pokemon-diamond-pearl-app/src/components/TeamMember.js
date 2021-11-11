import React from "react";

const TeamMember = (props) => {
    const { name, imgUrl } = props;

    return (
        <div className='member-container'>
            <h2>{name}</h2>
            <img src={imgUrl} alt={name} />
        </div>
    )
}

export default TeamMember;