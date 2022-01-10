import React from 'react'
import { Link } from 'gatsby';
import './customLink.css'

export default function CustomLink(props) {
    const {to, text} = props;
    return (
        <Link to={to} activeClassName='activeLink' className='link'>
            {text}
            <div className='linkStrike'></div>
        </Link> 
    )
}
