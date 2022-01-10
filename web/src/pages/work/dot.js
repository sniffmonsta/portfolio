import React from "react"
import Layout from "../../components/Layout"
import BreadCrumb from "../../components/BreadCrumb"
import './dot.css'

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
      <div className="comingSoon">
        Coming Soon
      </div>
    </Layout>
  )
}

