import React, {useEffect, createRef} from "react"
import Layout from "../../components/Layout"
import BreadCrumb from "../../components/BreadCrumb"
import './moodie.css'
import lottie from 'lottie-web'
import animation from '../../../static/dude_pink.json'
import comingSoon from '../../../static/comingSoon.json'


export default function Moodie() {
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
