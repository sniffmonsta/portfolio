import React from "react"
import Layout from "../components/Layout"
import BreadCrumb from "../components/BreadCrumb"

export default function Connect() {
  return (
    <Layout>
      <BreadCrumb links={[
        {
          to: '/connect',
          text: 'Connect'
        }
      ]} />
      <div className="comingSoon">
        Coming Soon
      </div>
    </Layout>
  )
}
