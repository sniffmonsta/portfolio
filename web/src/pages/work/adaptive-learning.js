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
      <div className="comingSoon">
        Coming Soon
      </div>
    </Layout>
  )
}
