import React, {useEffect, createRef} from "react"
import Layout from "../../components/Layout"
import BreadCrumb from "../../components/BreadCrumb"
import './retailSystems.css'
import lottie from 'lottie-web'
import animation from '../../../static/dude_darkblue.json'
import comingSoon from '../../../static/comingSoon.json'


export default function RetailSystems() {
  let animationContainer = createRef();
  let comingSoonContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, [animationContainer]);
  
  useEffect(() => {
    const comingSoonText = lottie.loadAnimation({
      container: comingSoonContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: comingSoon
    });
    return () => comingSoonText.destroy(); // optional clean up for unmounting
  }, [comingSoonContainer]);

  return (
    <Layout>
      <BreadCrumb links={[
        {
          to: '/work',
          text: 'Work'
        },
        {
          to: '/work/retailSystems',
          text: 'Retail Systems'
        }
      ]} />
      <div className="comingSoon3">
        <div className="animationContainer3" ref={animationContainer} />
        <div className="comingSoonContainer3" ref={comingSoonContainer} />
      </div>
    </Layout>
  )
}
