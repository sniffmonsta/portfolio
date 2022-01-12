import { Link } from 'gatsby'
import React from 'react'
import './sidebar.css'
import CustomLink from '../CustomLink'

export default function SideBar() {
    return (
        <div className='sideBar'>
            <div className='logoHolder'>
                <Link to='/' className='link'>
                    <img src='../../logo.png' className='logo'/>    
                </Link> 
                
            </div>
            <div className='links'>
                <CustomLink to='/' text='About' />
                <CustomLink to='/play' text='Play' />
                <CustomLink to='/work' text='Work' />
                <CustomLink to='/connect' text='Connect' />
            </div>
        </div>
    )
}
