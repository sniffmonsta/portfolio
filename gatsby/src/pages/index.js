import React from "react"
import Layout from "../components/Layout";
import BreadCrumb from "../components/BreadCrumb";
import '../styles/index.css';
import coolVibes from '../../static/coolVibes.png'
import resumeButton from '../../static/resumeButton.png'

export default function Home() {
  return (
    <Layout>
      <BreadCrumb links={[
        {
          to: '/',
          text: 'About'
        }
      ]} />

      <div className="aboutContainer">
        <div className="introContainer">
          <p className="doodleMonster">
            Doodle monster
          </p>
          <img src='../../doodleArrow.png' className='doodleArrow'/> 
          <p className="introHello">
            Hello, I’m Snigdha
          </p>
          <p className="introText">
            <img src='../../wordHighlight.png' className='introHighlightImage'/> 
            A product <p className="wordHighlight">experience designer</p><br/>Based in India. Currently crafting new and exciting creative solutions for @pwc.
          </p>
          <div className="resumeLinkContainer">
            <a href="Resume_2022.pdf" target='_blank'>
              <img src={resumeButton} className="resumeButtonImage"/>
            </a>
          </div>
        </div>
        <div className="coolVibesContainer">
          <img src={coolVibes} className="coolVibesImage"/>
        </div>
      </div>

    </Layout>
  )
}
