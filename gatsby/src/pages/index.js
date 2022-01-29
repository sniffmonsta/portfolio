import React from "react"
import Layout from "../components/Layout";
import BreadCrumb from "../components/BreadCrumb";
import '../styles/index.css';
import coolVibes from '../../static/coolVibes.png'
import resumeButton from '../../static/resumeButton.png'
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Link } from 'gatsby'

export default function Home() {
  const { height, width } = useWindowDimensions();
  return (
    <Layout>
      {width>=1024?(
      <BreadCrumb links={[
        {
          to: '/',
          text: 'About'
        }
      ]} />):null}

      <div className={width>=1024?'aboutContainer':'aboutContainerMobile'}>
        <div className="introContainer">
        {width<1024?
          (
            <div className='topLogo'>
              <Link to='/' className='link'>
                  <img src='../../logo.png' className='mobileLogo'/>    
              </Link>   
            </div>
          )
          :
          null
        }
        {width>=1024?(
          <>
            <p className="doodleMonster">
              Doodle monster
            </p>
            <img src='../../doodleArrow.png' className='doodleArrow'/> 
          </>
        ):null}
          <p className={width>=1024?'introHello':'introHelloMobile'}>
            Hello, I’m Snigdha
          </p>
          <p className="introText">
            <img src='../../wordHighlight.png' className='introHighlightImage'/> 
            A product 
            <p className="wordHighlight">experience designer</p><br/>
            Based in India. Currently crafting new and exciting creative solutions for @pwc.
          </p>
          <div className="resumeLinkContainer">
            <a href="Resume_2022.pdf" target='_blank'>
              <img src={resumeButton} className="resumeButtonImage"/>
            </a>
          </div>
        </div>
        {width>=1400?(
          <div className="coolVibesContainer">
            <img src={coolVibes} className="coolVibesImage"/>
          </div>
        ):null}

      </div>

    </Layout>
  )
}
