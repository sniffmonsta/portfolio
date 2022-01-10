import React from "react"
import Layout from "../../components/Layout"
import BreadCrumb from "../../components/BreadCrumb"
import './adaptive-learning.css'

export default function Play() {
  return (
    <Layout>
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
    </Layout>
  )
}
