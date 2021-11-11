import React from "react";
import TeamMember from "./TeamMember";

const TeamForm = (props) => {
    return (
        <div className='team-container'>
            <div className='team-slot'>
                <TeamMember details={props}/>
            </div>
            <div className='team-slot'>
                <TeamMember details={props}/>
            </div>
            <div className='team-slot'>
                <TeamMember details={props}/>
            </div>
            <div className='team-slot'>
                <TeamMember details={props}/>
            </div>
            <div className='team-slot'>
                <TeamMember details={props}/>
            </div>
            <div className='team-slot'>
                <TeamMember details={props}/>
            </div>
        </div>
    )
}

export default TeamForm;