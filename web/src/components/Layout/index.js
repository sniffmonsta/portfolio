import React from 'react'
import ProjectDetail from '../ProjectDetail';
import SideBar from '../Sidebar'
import './layout.css'

export default function Layout(props) {
    const {children, detail} = props;
    return (
        <div className='layout'>
            <div className='sideBarContainer'>
                {detail?<ProjectDetail detail={detail}/>:<SideBar />}
            </div>
            <div className='contentHolder'>
                {children}
            </div>
        </div>
    )
}
