import React from "react"
import Layout from "../components/Layout"
import BreadCrumb from "../components/BreadCrumb"
import ProjectLink from "../components/ProjectLink"
import '../styles/work.css';

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
        <ProjectLink id={'p1'} imageUrl={'projects/p1.png'} link={'adaptive-learning'} title={'Adaptive Learning'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'} />
        <ProjectLink id={'p2'} imageUrl={'projects/p2.png'} link={'innovation-dash'} title={'Innovation Dash'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'} />
        <ProjectLink id={'p3'} imageUrl={'projects/p3.png'} link={'dot'} title={'DoT'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'} />
        <ProjectLink id={'p4'} imageUrl={'projects/p4.png'} link={'krab-io'} title={'Krab.io'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'} />
      </div>
    </Layout>
  )
}
