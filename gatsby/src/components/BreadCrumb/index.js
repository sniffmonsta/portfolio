import React from 'react'
import { Link } from 'gatsby';
import './breadCrumb.css'

export default function BreadCrumb(props) {
    const {links} = props;
    return (
        <div className='breadCrumbsContainer'>
            {
            links.map(link=>{
                return (
                    <Link to={link.to} className='breadCrumb' key={link.text}>
                    {link.text}
                    </Link> 
                )
            })
            }
        </div>
    )
}
