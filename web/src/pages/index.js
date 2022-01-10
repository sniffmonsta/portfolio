import React from "react"
import Layout from "../components/Layout";
import BreadCrumb from "../components/BreadCrumb";
import '../styles/index.css';

export default function Home() {
  return (
    <Layout>
      <BreadCrumb links={[
        {
          to: '/',
          text: 'About'
        }
      ]} />
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
      </div>
    </Layout>
  )
}
