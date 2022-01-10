import React from 'react'
import './projectLink.css'
import { Link } from 'gatsby';

export default function ProjectLink(props) {
    const {id, link, imageUrl, title, description} = props;
    return (
        <Link className='projectLink' to={link}>
            <div className={id}>
                <img src={'../../'+imageUrl} className='projectImage' />
            </div>
            <p className='projectTitle'>{title}</p>
            <p className='projectDescription'>{description}</p>
        </Link> 
    )
}
