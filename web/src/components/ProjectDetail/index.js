import { Link } from 'gatsby'
import React from 'react'
import './projectDetail.css'

export default function ProjectDetail(props) {
    const {detail} = props;
    const {name, desc, team, role, duration} = detail;
    return (
        <div className='projectDetail'>
            <div className='detailLogoHolder'>
                <Link to='/' className='link'>
                    <img src='../../logo.png' className='detailLogo'/>    
                </Link> 
                
            </div>
            <div className='details'>
                <p className='detail-title'>{name}</p>
                <p className='detail-text'>{desc}</p>
                <p className='detail-title'>Team</p>
                <p className='detail-text'>{team.map(member => {
                    return <p className='team-member'>{member}</p>;
                })}</p>
                <p className='detail-title'>Role</p>
                <p className='detail-text'>{role}</p>
                <p className='detail-title'>Duration</p>
                <p className='detail-text'>{duration}</p>
            </div>
        </div>
    )
}
