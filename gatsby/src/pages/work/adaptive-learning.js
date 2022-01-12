import React from "react"
import Layout from "../../components/Layout"
import BreadCrumb from "../../components/BreadCrumb"
import './adaptive-learning.css'
import p1 from '../../../static/projects/p1.png'

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
        <img src={p1} className='al-headerImage'/>
      </div>

      <div className="al-intro">
        <p className="al-introTitle">The Need</p>
        <p className="al-introText">A certain edu-tech company that has been delivering learning management systems for K-12 schools nation wide for over 10+ years, realised that creating improved content for students did not improve the rate of learning as the traditional model follows a ‘take it or leave it’ philosophy, which considered the student group to collectively have similar learning styles, levels of competence, learning needs and motivation levels.</p>
      </div>

      <div className="al-challenges">
        <div className="al-mini-title">CHALLENGE</div>
        <div className="al-channenges-content">
          <div className="al-challenge">
            <p className="al-challenge-title">Student</p>
            <p className="al-challenge-text">They are unable to keep up with the school curriculum. Often forgetting what has been taught to them in the beginning of the year. Association of topics within chapters becomes difficult.</p>
          </div>
          <div className="al-challenge">
            <p className="al-challenge-title">Teacher</p>
            <p className="al-challenge-text">Each student has a different learning style and with 45min allocated to teaching a classroom filled with 30-40 students it is hard to track progress/ learning needs of individual students.</p>
          </div>
        </div>
        <p className="al-subtitle-center">We scheduled visits to nearby schools and interacted with the teacher and students. We also had the opportunity to sit in one of the classes. That made us pondered further on ..</p>
      </div>


      <div className="al-how-might-we">
        <div className="al-how-might-we-content">
          <p className="al-how-might-we-left">How might we?</p>
          <p className="al-how-might-we-right">Create a self directed enviroment that helps the student learn and understand a particular subject in an effortless manner.Have an equal method gaining maximum knowledge for both an average student and a smart student.</p>
        </div>
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

      <div className="al-target-audience">
        <div className="al-mini-title">TARGET AUDIENCE</div>
        <p className="al-text-center">As the product is a little heavy on computer interactions, we decided to narrow down and start with students from <p className="al-bold">6th to 12th standard.</p> As they are well versed with computers. As well as <p className="al-bold">teachers.</p></p>
      </div>

      <div className="al-persona">
        <div className="al-mini-title">PERSONA</div>
        <p className="al-subtitle">The class comprised of 40 students, after having interacted with each of them for a brief span we classified them into groups</p>
      </div>

    </Layout>
  )
}
