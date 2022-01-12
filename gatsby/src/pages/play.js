import React from "react"
import Layout from "../components/Layout"
import BreadCrumb from "../components/BreadCrumb"

export default function Play() {
  return (
    <Layout>
      <BreadCrumb links={[
        {
          to: '/play',
          text: 'Play'
        }
      ]} />
      <div className="comingSoon">
        Coming Soon
      </div>
    </Layout>
  )
}
