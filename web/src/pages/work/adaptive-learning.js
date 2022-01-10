import React from "react"
import Layout from "../../components/Layout"
import BreadCrumb from "../../components/BreadCrumb"
import './adaptive-learning.css'

export default function Play() {
  return (
    <Layout detail={{
      name: 'Adaptive Learning',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      team: ['Snigdha Narayan','Aishwarya Shetty', 'Anish Patel'],
      role: 'Lead UX Designer',
      duration: '12 Months'
    }}>
      <BreadCrumb links={[
        {
          to: '/work',
          text: 'Work'
        },
        {
          to: '/work/adaptive-learning',
          text: 'Adaptive Learning'
        }
      ]} />

      <div className="al-header">
        <img src='../projects/p1.png' className='al-headerImage'/>
      </div>
      <div className="al-intro">
        <p className="al-introTitle">The Need</p>
        <p className="al-introText">A certain edu-tech company that has been delivering learning management systems for K-12 schools nation wide for over 10+ years, realised that creating improved content for students did not improve the rate of learning as the traditional model follows a ‘take it or leave it’ philosophy, which considered the student group to collectively have similar learning styles, levels of competence, learning needs and motivation levels.</p>
      </div>


      <div className="al-how-might-we">
        <p className="al-how-might-we-left">How might we?</p>
        <p className="al-how-might-we-right">Create a self directed enviroment that helps the student learn and understand a particular subject in an effortless manner.Have an equal method gaining maximum knowledge for both an average student and a smart student.</p>
      </div>

      <div className="al-keyfindings">
        <div className="al-mini-title">Key Findings</div>
        <p className="al-subtitle">By speaking to the students who attended the classes, we identified their major pain points.</p>
        <div className="al-keyfindings-list">
          <div className="al-keyfinding">
            <p className="al-keyfinding-number">01</p>
            <p className="al-keyfinding-text">Difficulty in Exploring chapters and concepts within them.</p>
          </div>
          <div className="al-keyfinding">
            <p className="al-keyfinding-number">02</p>
            <p className="al-keyfinding-text">Unable to Understand relations within concepts.</p>
          </div>
          <div className="al-keyfinding">
            <p className="al-keyfinding-number">03</p>
            <p className="al-keyfinding-text">Regular Tests fail to assess how much knowledge a student possess periodically.</p>
          </div>
          <div className="al-keyfinding">
            <p className="al-keyfinding-number">04</p>
            <p className="al-keyfinding-text">To understand the learning difficulties of a student</p>
          </div>
          <div className="al-keyfinding">
            <p className="al-keyfinding-number">05</p>
            <p className="al-keyfinding-text">Unable to easily access personalised resources.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
