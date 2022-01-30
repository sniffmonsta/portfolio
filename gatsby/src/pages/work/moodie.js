import React, {useCallback} from "react"
import Layout from "../../components/Layout"
import BreadCrumb from "../../components/BreadCrumb"
import './moodie.css'
import lottie from 'lottie-web'
import animation from '../../../static/dude_pink.json'
import comingSoon from '../../../static/comingSoon.json'


export default function Moodie() {

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
          to: '/work/moodie',
          text: 'Moodie'
        }
      ]} />
      <div className="comingSoon2">
        <div className="animationContainer2" ref={animationContainer} />
        <div className="comingSoonContainer2" ref={comingSoonContainer} />
      </div>
    </Layout>
  )
}
