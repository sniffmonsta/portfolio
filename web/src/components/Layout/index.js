import React from 'react'
import SideBar from '../Sidebar'
import './layout.css'

export default function Layout(props) {
    const {children} = props;
    return (
        <div className='layout'>
            <div className='sideBarContainer'>
                <SideBar/>
            </div>
            <div className='contentHolder'>
                {children}
            </div>
        </div>
    )
}
