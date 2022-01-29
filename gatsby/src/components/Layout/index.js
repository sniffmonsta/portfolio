import React from 'react'
import ProjectDetail from '../ProjectDetail';
import SideBar from '../Sidebar'
import './layout.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';


export default function Layout(props) {
    const {children, detail} = props;
    const { height, width } = useWindowDimensions();
    console.log(width)
    return (
        <div className='layout'>
            {width>=1024?(
            <div className='sideBarContainer'>
                {detail?<ProjectDetail detail={detail}/>:<SideBar />}
            </div>):null}
            <div className='contentHolder'>
                {width>=320?children:null}
            </div>
        </div>
    )
}
