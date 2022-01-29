import React from 'react'
import ProjectDetail from '../ProjectDetail';
import SideBar from '../Sidebar'
import './layout.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';


export default function Layout(props) {
    const {children, detail} = props;
    const { height, width } = useWindowDimensions();
    return (
        <div className={width>=1024?'layout':'layoutMobile'}>
            {width>=1024?(
            <div className='sideBarContainer'>
                {detail?<ProjectDetail detail={detail}/>:<SideBar />}
            </div>):null}
            <div className={width>=1024?'contentHolder':'contentHolderMobile'}>
                {width>=320?children:null}
            </div>
        </div>
    )
}
