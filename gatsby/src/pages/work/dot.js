import React from "react"
import Layout from "../../components/Layout"
import BreadCrumb from "../../components/BreadCrumb"
import './dot.css'
import p3 from '../../../static/projects/p3.png'
import blackBear from '../../../static/projects/p3/blackBear.png'
import whiteBear from '../../../static/projects/p3/whiteBear.png'
import beKind from '../../../static/projects/p3/beKind.png'
import classmates from '../../../static/projects/p3/classmates.png'
import d_immersions from '../../../static/projects/p3/d_immersions.png'
import d_survey from '../../../static/projects/p3/d_survey.png'
import friends from '../../../static/projects/p3/friends.png'
import gamer from '../../../static/projects/p3/gamer.png'
import idea1 from '../../../static/projects/p3/idea1.png'
import idea2 from '../../../static/projects/p3/idea2.png'
import idea3 from '../../../static/projects/p3/idea2.png'
import interface from '../../../static/projects/p3/interface.png'
import storyboard from '../../../static/projects/p3/storyboard.png'
import threeDoodles from '../../../static/projects/p3/threeDoodles.png'

export default function Play() {
  return (
    <Layout detail={{
      name: 'DoT',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      team: ['Snigdha Narayan','Mukesh Manda'],
      role: 'Lead UX Designer',
      duration: '2 Months'
    }}>
      <BreadCrumb links={[
        {
          to: '/work',
          text: 'Work'
        },
        {
          to: '/work/dot',
          text: 'DoT'
        }
      ]} />

      <div className="d-header">
        <img src={p3} className='d-headerImage'/>
      </div>

      <div className="d-intro">
        <div className="d-intro-left">
          <img src={blackBear} className="d-intro-left-img" />
        </div>
        <div className="d-intro-center">
          <p className="d-introTitle">The Need</p>
          <p className="d-introText">How often do we seek company to do things ? Ever wanted to go play badminton and had no-one who was up for it. This was a problem that me and my friend both faced.</p>
        </div>
        <div className="d-intro-right">
          <img src={whiteBear} className="d-intro-right-img" />
        </div>
      </div>

    </Layout>
  )
}

