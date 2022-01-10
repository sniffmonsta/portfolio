import React from "react"
import Layout from "../../components/Layout"
import BreadCrumb from "../../components/BreadCrumb"
import './dot.css'

export default function Play() {
  return (
    <Layout>
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

