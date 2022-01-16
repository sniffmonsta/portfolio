import React from "react"
import Layout from "../../components/Layout"
import BreadCrumb from "../../components/BreadCrumb"
import './dot.css'
import p3 from '../../../static/projects/p3.png'
import blackBear from '../../../static/projects/p3/blackBear.png'
import whiteBear from '../../../static/projects/p3/whiteBear.png'
import beKind from '../../../static/projects/p3/beKind.png'
import d_where from '../../../static/projects/p3/d_where.png'
import d_immersions from '../../../static/projects/p3/d_immersions.png'
import d_survey from '../../../static/projects/p3/d_survey.png'
import idea1 from '../../../static/projects/p3/idea1.png'
import idea2 from '../../../static/projects/p3/idea2.png'
import idea3 from '../../../static/projects/p3/idea2.png'
import ui from '../../../static/projects/p3/ui.png'
import storyboard from '../../../static/projects/p3/storyboard.png'
import threeDoodles from '../../../static/projects/p3/threeDoodles.png'
import line from '../../../static/projects/p3/line.png'

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

      <div className="d-immersions">
        <p className="d-mini-title">IMMERSIONS</p>
        <div className="d-immersions-top">
          <div className="d-immersions-left">
            <p className="d-title">Why do we feel lonely?</p>
            <p className="d-text">Though our need to connect is innate, many of us frequently feel alone. Loneliness is the state of distress or discomfort that results when one perceives a gap between one’s desires for social connection and actual experiences of it.</p>
          </div>

          <div className="d-immersions-right">
            <img src={d_immersions} className="d-immersions-img" />
          </div>
        </div>

        <div className="d-immersions-middle">
          <img src={d_survey} className="d-immersions-middle-img" />
        </div>
        <div className="d-immersions-bottom">
          <p className="d-mini-title-center">Where do we generally meet people?</p>
          <img src={d_where} className="d-immersions-bottom-img" />
        </div>
      </div>


      <div className="d-how-might-we">
        <div className="d-how-might-we-content">
          <p className="d-how-might-we-left">How might we?</p>
          <p className="d-how-might-we-right">Help to improve social health and bridge the gap between one’s desires for social connection and actual experiences of it.</p>
        </div>
      </div>


      <div className="d-concept">
        <p className="d-mini-title">CONCEPT</p>
        <div className="d-concept-content">
          <div className="d-concept-left">
            <img src={beKind} className="d-concept-left-img" />
          </div>
          <div className="d-concept-center">
            <p className="d-conceptTitle">What is social health?</p>
            <p className="d-conceptText">
              Social health can be defined as our ability to interact and form meaningful relationships with others. It also relates to how comfortably we can adapt in social situations. Social relationships have an impact on our mental health, physical health and mortality risk.
              <br/><br/>
              We began researching on ways to improve social health and they seem very simple at the first glance but they are actually very difficult to practise in daily life. We began brainstorming ideas to solve this.
            </p>
          </div>
          <div className="d-concept-right">
            <img src={threeDoodles} className="d-concept-right-img" />
          </div>
        </div>
      </div>


      <div className="d-storyboarding">
        <p className="d-mini-title">STORYBOARDING</p>
        <div className="d-storyboarding-content">
            <img src={storyboard} className="d-storyboarding-img" />
          </div>
      </div>

      <div className="d-idea">
        <p className="d-mini-title">IDEA</p>
        <p className="d-text">Everyone meets tons of people through their life, how many of us actually keep those relationships alive? We spoke to a few therapists to evaluate what works best in such cases and how can we connect with users who are feeling this way. That we we arrived at the below concepts</p>
        <div className="d-idea-content">
          <div className="idea-block">
            <div className="idea-block-top">
              <img src={idea1} className='idea-block-img'/>
            </div>
            <div className="idea-block-bottom">
              <div className="idea-block-left">
                <p>01/</p>
              </div>
              <div className="idea-block-right">
                <p className="idea-block-right-title">Self Love</p>
                <p className="idea-block-right-text">What if we created a self care cup? That helps you assess which spectrum of self care to focus on and provide tips to achieve the same.</p>
              </div>
            </div>
          </div>

          <div className="idea-block">
            <div className="idea-block-top">
              <img src={idea2} className='idea-block-img'/>
            </div>
            <div className="idea-block-bottom">
              <div className="idea-block-left">
                <p>02/</p>
              </div>
              <div className="idea-block-right">
                <p className="idea-block-right-title">Relationship Map</p>
                <p className="idea-block-right-text">Sometimes when we are feeling lonely, we can’t see what’s right in front of us. So making a list of all the connections you have and reconnecting will help you feel better</p>
              </div>
            </div>
          </div>

          <div className="idea-block">
            <div className="idea-block-top">
              <img src={idea3} className='idea-block-img'/>
            </div>
            <div className="idea-block-bottom">
              <div className="idea-block-left">
                <p>03/</p>
              </div>
              <div className="idea-block-right">
                <p className="idea-block-right-title">Acceptance Rate</p>
                <p className="idea-block-right-text">A meter helps you assess how open you are to accepting people. It can act as a motivator, to see the shift to the right based on your efforts to keep a healthy social circle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="d-solution">
        <p className="d-mini-title">SOLUTION STATEMENT</p>
        <div className="d-solution-content">
            <img src={line} className="d-solution-content-line" />
            <p className="d-solution-content-text">
              It’s never too late to <p className="d-solution-content-highlight">socialise</p> or rekindle existing relationships.
            </p>
        </div>
      </div>


      <div className="d-you-choose">
        <div className="d-you-choose-content">
          <div className="d-you-choose-left">You choose <br/>when and how.</div>
          <div className="d-you-choose-right">
            <img src={whiteBear} className="d-you-choose-img" />
          </div>
        </div>
      </div>


      <div className="d-final">
        <p className="d-mini-title">FINAL INTERFACE</p>
        <div className="d-final-content">
          <img src={ui} className="d-final-img" />
        </div>
      </div>


    </Layout>
  )
}

