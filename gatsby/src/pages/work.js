import React from "react"
import Layout from "../components/Layout"
import BreadCrumb from "../components/BreadCrumb"
import ProjectLink from "../components/ProjectLink"
import '../styles/work.css';
import p1 from '../../static/projects/p1.png'
import p2 from '../../static/projects/p2.png'
import p3 from '../../static/projects/p3.png'
import p4 from '../../static/projects/p5.png'
import p5 from '../../static/projects/p5.png'
import p6 from '../../static/projects/p5.png'

export default function Work() {
  return (
    <Layout>
      <BreadCrumb links={[
        {
          to: '/work',
          text: 'Work'
        }
      ]} />
      <div className="projectLinksContainer">
        <ProjectLink id={'p1'} imageUrl={p1} link={'adaptive-learning'} title={'Adaptive Learning'} description={'A platform for self learning that is defined by the unique learning paths students take.'} tags={['Research', 'UX', 'User Testing']} />
        <ProjectLink id={'p2'} imageUrl={p2} link={'innovation-dash'} title={'Innovation Dash'} description={'A predictive warning system to track market innovation performance'} tags={['Research', 'UX']}/>
        <ProjectLink id={'p3'} imageUrl={p3} link={'dot'} title={'DoT'} description={'A platform to improve social health by connecting those experiencing loneliness'} tags={['UX', 'UI']} />
        <ProjectLink id={'p4'} imageUrl={p4} link={'moodie'} title={'Moodie'} description={'A smart haptic fidget ball which helps people deal with anxiety better'} tags={['Research', 'Product Design']}/>
        <ProjectLink id={'p5'} imageUrl={p5} link={'krab-io'} title={'Krab.io'} description={'A smart transport management tool for any business, any size.'} tags={['Research', 'UX', 'UI']}/>
        <ProjectLink id={'p6'} imageUrl={p6} link={'retailSystems'} title={'Retail Systems'} description={'An asset management dashboard that tracks retail machines health across the globe.'} tags={['Research', 'UX']}/>
      </div>
    </Layout>
  )
}
