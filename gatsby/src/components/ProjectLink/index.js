import React from 'react'
import './projectLink.css'
import { Link } from 'gatsby';
import _ from 'lodash';

export default function ProjectLink(props) {
    const {id, link, imageUrl, title, description, tags} = props;
    return (
        <Link className='projectLink' to={link}>
            <div className={id}>
                <img src={'../../'+imageUrl} className='projectImage' />
            </div>
            <p className='projectTitle'>{title}</p>
            <p className='projectDescription'>{description}</p>
            <p className='projectTags'>{_.map(tags, tag=><p className='projectTag'>{tag}</p>)}</p>
        </Link> 
    )
}
