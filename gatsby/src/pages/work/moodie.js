import React, {useEffect, createRef} from "react"
import Layout from "../../components/Layout"
import BreadCrumb from "../../components/BreadCrumb"
import './moodie.css'
import lottie from 'lottie-web'
import animation from '../../../static/dude_pink.json'


export default function Moodie() {
  let animationContainer = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation
    });
    return () => anim.destroy(); // optional clean up for unmounting
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
      <div className="comingSoon">
        <div className="animationContainer" ref={animationContainer} />
      </div>
    </Layout>
  )
}
