import React, {useCallback} from "react"
import Layout from "../../components/Layout"
import BreadCrumb from "../../components/BreadCrumb"
import './krab-io.css'
import lottie from 'lottie-web'
import animation from '../../../static/dude_blue.json'
import comingSoon from '../../../static/comingSoon.json'


export default function Krab() {

  const animationContainer =  useCallback(node => {
    if (node !== null) {
      const anim = lottie.loadAnimation({
        container: node,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animation
      });
    }
  }, []);

  let comingSoonContainer =  useCallback(node => {
    if (node !== null) {
      const comingSoonText = lottie.loadAnimation({
        container: node,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: comingSoon
      });
    }
  }, []);

  return (
    <Layout>
      <BreadCrumb links={[
        {
          to: '/work',
          text: 'Work'
        },
        {
          to: '/work/krab-io',
          text: 'Krab.io'
        }
      ]} />
      <div className="comingSoon1">
        <div className="animationContainer1" ref={animationContainer} />
        <div className="comingSoonContainer1" ref={comingSoonContainer} />
      </div>
    </Layout>
  )
}
