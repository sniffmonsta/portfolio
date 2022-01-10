import React from "react"
import Layout from "../../components/Layout"
import BreadCrumb from "../../components/BreadCrumb"
import './innovation-dash.css'

export default function Play() {
  return (
    <Layout>
      <BreadCrumb links={[
        {
          to: '/work',
          text: 'Work'
        },
        {
          to: '/work/innovation-dash',
          text: 'Innovation Dashboard'
        }
      ]} />
      <div className="id-header">
        <img src='../projects/p2.png' className='id-headerImage'/>
      </div>
      <div className="id-intro">
        <p className="id-introTitle">The Need</p>
        <p className="id-introText">This company owns over 400 brands across the globe, producing tons of consumer goods. <br/><p className="id-introHighlight">Shh can’t reveal the client name for NDA purposes!</p> Tracking innovations, while managing multiple brands was becoming a tedious task for them.</p>
      </div>
      
      <div className="id-innovations">
        <div className="id-innovation">
          <img src='../projects/p2/bodybath.png' className='id-innovationImage'/>
          <p className="id-innovationName">Body & Bath</p>
        </div>
        <div className="id-innovation">
          <img src='../projects/p2/hygiene.png' className='id-innovationImage'/>
          <p className="id-innovationName">Hygiene</p>
        </div>
        <div className="id-innovation">
          <img src='../projects/p2/food.png' className='id-innovationImage'/>
          <p className="id-innovationName">Food</p>
        </div>
        <div className="id-innovation">
          <img src='../projects/p2/beauty.png' className='id-innovationImage'/>
          <p className="id-innovationName">Beauty</p>
        </div>
      </div>
      <div className="id-innovations-underline"><p>&nbsp;</p></div>
      <p className="id-innovations-text">Innovations</p>

      <div className="id-immersions">
        <p className="id-mini-title">Immersions</p>
        <div className="id-immersions-content">
          <div className="id-immersions-left">
            <img src='../projects/p2/immersions-left.png' className='id-immersions-left-img'/>
          </div>     
          <div className="id-immersions-right">
            <p className="id-immersions-right-title">Who launches an innovation and what does it take?</p>
            <p className="id-immersions-right-p1">Yes, I had a whole lot of questions. We just dived right into it and spoke to over 14 brand managers and 2 category heads</p>
            <p className="id-immersions-right-p2">IT TAKES A LOT OF</p>
            <img src='../projects/p2/immersions-right.png' className='id-immersions-right-img'/>
          </div>
        </div>
      </div>

      <div className="id-how-might-we">
        <p className="id-how-might-we-left">How might we?</p>
        <p className="id-how-might-we-right">Create a system that helps a manager track everything from prelaunch to post launch. Identify problem areas and take quick actions.</p>
      </div>

      <div className="id-challenges">
        <div className="id-mini-title">CHALLENGES</div>
        <div className="id-challenges-list">
          <div className="id-challenge">
            <p className="id-challenge-number">01</p>
            <p className="id-challenge-text">Networking with various teams to procure the right data</p>
          </div>
          <div className="id-challenge">
            <p className="id-challenge-number">02</p>
            <p className="id-challenge-text">Scattered data points to work with/identify problems</p>
          </div>
          <div className="id-challenge">
            <p className="id-challenge-number">03</p>
            <p className="id-challenge-text">Time management During tight deadlines</p>
          </div>
          <div className="id-challenge">
            <p className="id-challenge-number">04</p>
            <p className="id-challenge-text">Tracking multiple innovations at the same time.</p>
          </div>
          <div className="id-challenge">
            <p className="id-challenge-number">05</p>
            <p className="id-challenge-text">Recording multiple changes in plan of action</p>
          </div>
        </div>
      </div>

      <div className="id-insights">
        <p className="id-mini-title">Insights</p>
        <div className="id-insights-content">
          <div className="id-insights-left">
            <p>I spoke to brand managers who catered to a wide range of products and everybody had a unique requirement that only probably fit their use case. It was a challenge to include them all onto an all inclusive dashboard that works for everybody.</p>
          </div>
          <div className="id-insights-right">
            <img src='../projects/p2/insights-right.png'/>
          </div>
        </div>
      </div>

      <div className="id-ideation">
        <p className="id-mini-title">Ideation</p>
        <p className="id-ideation-text">Usually these launches took place on three main channels, I analysed that all the data coming in was mostly channel wise data, so I decided to design the dashboards accordingly.</p>
        <div className="id-ideation-content">
          <div className="id-ideation-channel">
            <div className="id-ideation-channel-name">
              Channel 01
            </div>
            <div className="id-ideation-channel-description">
              The small stores around your neighbourhood.
            </div>
          </div>
          <div className="id-ideation-channel">
            <div className="id-ideation-channel-name">
              Channel 02
            </div>
            <div className="id-ideation-channel-description">
            The superstores around you. A target, D Mart etc.
            </div>
          </div>
          <div className="id-ideation-channel">
            <div className="id-ideation-channel-name">
              Channel 03
            </div>
            <div className="id-ideation-channel-description">
              Online shopping such as Amazon, swiggy etc.
            </div>
          </div>
        </div>
      </div>

      <div className="id-wireframes">
        <p className="id-mini-title">Wireframes</p>
        <div className="id-wireframes-content">
          <div className="id-wireframes-left">
            <img src='../projects/p2/wireframes.png' className='id-wireframes-left-img'/>
          </div>     
          <div className="id-wireframes-right">
            <p className="id-wireframes-right-title">V4_Finalfile.xd</p>
            <p className="id-wireframes-right-p1">My Initial approach (on the left) to showcase all the metrics gone wrong and provide a list on the left side to pick from. It became clear that the volume of information was more dense and would hinder the experience of navigating through channels.</p>
            <p className="id-wireframes-right-p2">After multiple iterations, I created a layout that could easily navigate between the 3 channels available and would showcase the most important metrics in the form of cards and below those would be a detailed visual rep of charts and trend lines. The client loved the approach and we settled on building this consistently across the system.</p>
          </div>
        </div>
      </div>

      <div className="id-product">
        <img src='../projects/p2/product.png' className='id-product-img'/>
      </div>


      <div className="id-ui">
        <p className="id-mini-title">User Interface</p>
        <p className="id-ui-text">The tool on which the dashboard was developed is called PowerBI. It has it own limitation in terms of custom design elements so I created a system of visual design which was sleek, yet aesthetic. The major challenge here was to highlight the important data points and there were many of them.</p>
        <img src='../projects/p2/ui.png' className='id-ui-img'/>
      </div>

      <div className="id-solution">
        <p className="id-mini-title">SOLUTION STATEMENT</p>
        <div className="id-solution-quote">
          <img src='../projects/p2/solutionHighlight.png' className='id-solution-img'/>
          <p className="id-solution-text">An effective <p className="id-solution-highlight">warning system</p> that enables you to track multiple launches.</p>
        </div>
      </div>

      <div className="id-solution-content">
          <div className="id-solution-left">
            <p className="id-solution-left-title">Useful Insights on the dashboard</p>
            <p className="id-solution-left-text">Then designed a system that would display useful insights based on the past data trends. So when a user logs into the system he/she can see a future forecast of how their sales is likely to perform based on the metrics they have chosen. It can also recommend an action for the user to perform. This system of identification is termed as the red, amber and green status system.</p>
          </div>
          <div className="id-solution-right">
            <img src='../projects/p2/monsters.png'/>
          </div>
      </div>

      <div className="id-dashboard">
        <img src='../projects/p2/dashboard.png' className='id-dashboard-img'/>
      </div>

    </Layout>
  )
}
