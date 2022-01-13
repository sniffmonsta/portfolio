import React from "react"
import Layout from "../../components/Layout"
import BreadCrumb from "../../components/BreadCrumb"
import './adaptive-learning.css'
import p1 from '../../../static/projects/p1.png'
import persona from '../../../static/projects/p1/persona.png'
import classroom from '../../../static/projects/p1/classroom.png'
import homework from '../../../static/projects/p1/homework.png'
import tests from '../../../static/projects/p1/tests.png'
import frog from '../../../static/projects/p1/frog.png'
import fox from '../../../static/projects/p1/fox.png'
import cat from '../../../static/projects/p1/cat.png'
import conceptualization from '../../../static/projects/p1/conceptualization.png'
import oneCircle from '../../../static/projects/p1/oneCircle.png'
import twoCircles from '../../../static/projects/p1/twoCircles.png'
import threeCircles from '../../../static/projects/p1/threeCircles.png'
import circle from '../../../static/projects/p1/circle.png'
import line from '../../../static/projects/p1/line.png'
import s1 from '../../../static/projects/p1/s1.png'
import s2 from '../../../static/projects/p1/s2.png'
import s3 from '../../../static/projects/p1/s3.png'
import s4 from '../../../static/projects/p1/s4.png'

export default function Play() {
  return (
    <Layout detail={{
      name: 'Adaptive Learning',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      team: ['Snigdha Narayan','Aishwarya Shetty', 'Anish Patel'],
      role: 'Lead UX Designer',
      duration: '12 Months'
    }}>
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

      <div className="al-header">
        <img src={p1} className='al-headerImage'/>
      </div>

      <div className="al-intro">
        <p className="al-introTitle">The Need</p>
        <p className="al-introText">A certain edu-tech company that has been delivering learning management systems for K-12 schools nation wide for over 10+ years, realised that creating improved content for students did not improve the rate of learning as the traditional model follows a ‘take it or leave it’ philosophy, which considered the student group to collectively have similar learning styles, levels of competence, learning needs and motivation levels.</p>
      </div>

      <div className="al-challenges">
        <div className="al-mini-title">CHALLENGE</div>
        <div className="al-channenges-content">
          <div className="al-challenge">
            <p className="al-challenge-title">Student</p>
            <p className="al-challenge-text">They are unable to keep up with the school curriculum. Often forgetting what has been taught to them in the beginning of the year. Association of topics within chapters becomes difficult.</p>
          </div>
          <div className="al-challenge">
            <p className="al-challenge-title">Teacher</p>
            <p className="al-challenge-text">Each student has a different learning style and with 45min allocated to teaching a classroom filled with 30-40 students it is hard to track progress/ learning needs of individual students.</p>
          </div>
        </div>
        <p className="al-subtitle-center">We scheduled visits to nearby schools and interacted with the teacher and students. We also had the opportunity to sit in one of the classes. That made us pondered further on ..</p>
      </div>


      <div className="al-how-might-we">
        <div className="al-how-might-we-content">
          <p className="al-how-might-we-left">How might we?</p>
          <p className="al-how-might-we-right">Create a self directed enviroment that helps the student learn and understand a particular subject in an effortless manner.Have an equal method gaining maximum knowledge for both an average student and a smart student.</p>
        </div>
      </div>

      <div className="al-keyfindings">
        <div className="al-mini-title">Key Findings</div>
        <p className="al-subtitle">By speaking to the students who attended the classes, we identified their major pain points.</p>
        <div className="al-keyfindings-list">
          <div className="al-keyfinding">
            <p className="al-keyfinding-number">01</p>
            <p className="al-keyfinding-text">Difficulty in Exploring chapters and concepts within them.</p>
          </div>
          <div className="al-keyfinding">
            <p className="al-keyfinding-number">02</p>
            <p className="al-keyfinding-text">Unable to Understand relations within concepts.</p>
          </div>
          <div className="al-keyfinding">
            <p className="al-keyfinding-number">03</p>
            <p className="al-keyfinding-text">Regular Tests fail to assess how much knowledge a student possess periodically.</p>
          </div>
          <div className="al-keyfinding">
            <p className="al-keyfinding-number">04</p>
            <p className="al-keyfinding-text">To understand the learning difficulties of a student</p>
          </div>
          <div className="al-keyfinding">
            <p className="al-keyfinding-number">05</p>
            <p className="al-keyfinding-text">Unable to easily access personalised resources.</p>
          </div>
        </div>
      </div>

      <div className="al-target-audience">
        <div className="al-mini-title">TARGET AUDIENCE</div>
        <p className="al-text-center">As the product is a little heavy on computer interactions, we decided to narrow down and start with students from <p className="al-bold">6th to 12th standard.</p> As they are well versed with computers. As well as <p className="al-bold">teachers.</p></p>
      </div>

      <div className="al-persona">
        <div className="al-mini-title">PERSONA</div>
        <p className="al-subtitle">The class comprised of 40 students, after having interacted with each of them for a brief span we classified them into groups</p>
        <div className="al-persona-content">
          <div className="al-persona-left">
            <p className="al-text">There are 4 possible cases considering two important factors that is</p>
            <div className="al-persona-type">
              <p className="al-persona-type-number">01/</p>
              <p className="al-persona-type-text">Interest in learning</p>
            </div>
            <div className="al-persona-type">
              <p className="al-persona-type-number">02/</p>
              <p className="al-persona-type-text">Abiding by the educational system followed by schools and colleges.</p>
            </div>
          </div>
          <div className="al-persona-right">
            <img src={persona} className='al-persona-image'/>
          </div>
        </div>
      </div>

      <div className="al-insights">
        <div className="al-mini-title">INSIGHTS</div>
        <p className="al-subtitle">Once there persona was in place we looked into the life of a student and their methods of learning.&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <div className="al-insights-content">
          <div className="al-insight">
            <div className="al-insight-top">
              <img src={classroom} className='al-insight-top-image'/>
              <p className="al-insight-top-text">Classroom</p>
            </div>
            <div className="al-insight-bottom">
              <img src={frog} className='al-insight-bottom-image'/>
              <p className="al-insight-bottom-text">
              - Can’t focus for 30-40 min straight <br/>
              - One size does not fit all
              </p>
            </div>
          </div>
          <div className="al-insight">
            <div className="al-insight-top">
              <img src={homework} className='al-insight-top-image'/>
              <p className="al-insight-top-text">Home work</p>
            </div>
            <div className="al-insight-bottom">
              <img src={fox} className='al-insight-bottom-image'/>
              <p className="al-insight-bottom-text">
              - Boring <br/>
              - Not personalized
              </p>
            </div>
          </div>
          <div className="al-insight">
            <div className="al-insight-top">
              <img src={tests} className='al-insight-top-image'/>
              <p className="al-insight-top-text">Tests</p>
            </div>
            <div className="al-insight-bottom">
              <img src={cat} className='al-insight-bottom-image'/>
              <p className="al-insight-bottom-text">
              - Scary <br/>
              - Requires Prep time
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="al-conceptualization">
        <div className="al-mini-title">CONCEPTULIZATION</div>
        <p className="al-subtitle">Out of the three insights that we gathered, we couldn’t do much about the classroom, so we picked up on homework and tests</p>
        <div className="al-conceptualization-content">
          <div className="al-conceptualization-left">
            <img src={conceptualization} className="al-conceptualization-image" />
            <p className="al-conceptualization-image-text">Concepts are small and easy to consume</p>
          </div>
          <div className="al-conceptualization-right">
          <p className="al-conceptualization-title">Why Concepts?</p>
          <p className="al-conceptualization-text">
            Each subject taught in school today is divided into consumable chunks known to us as chapters. If you further drill down into the contents of a chapter then we have concepts. We worked our way up to see how interlinked these concepts were across chapters.
            <br/><br/>
            For that, first we wanted to start by understanding the technology itself. This resulted in an extensive research on the technology behind natural language processing.
          </p>
          </div>
        </div>
      </div>


      <div className="al-testtaking">
        <div className="al-mini-title">TEST TAKING</div>
        <p className="al-subtitle">Imagine the concept of mock tests in competitive exams. They re-assure that you can take tests right before the actual test, right? Similar to that we built a test taking module which will ensure the student understands and validates their knowledge at all levels</p>
        <div className="al-testtaking-content">
          <div className="al-testtaking-block">
            <img src={oneCircle} className="al-testtaking-block-image"/>
            <p className="al-testtaking-block-title">Item Response</p>
            <p className="al-testtaking-block-text">A student can test themselves in a concept or a chapter right after they finish their class.</p>
          </div>
          <div className="al-testtaking-block">
            <img src={twoCircles} className="al-testtaking-block-image"/>
            <p className="al-testtaking-block-title">Knowledge Space</p>
            <p className="al-testtaking-block-text">This test is designed to be taken at any point of the learning journey to assess the current knowledge of the student.</p>
          </div>
          <div className="al-testtaking-block">
            <img src={threeCircles} className="al-testtaking-block-image"/>
            <p className="al-testtaking-block-title">Knowledge Space</p>
            <p className="al-testtaking-block-text">If the student feels too confident and is capable of taking a test in an advance chapter. He/she should be able to challenge the system.</p>
          </div>
        </div>
      </div>


      <div className="al-solution-statement">
        <div className="al-mini-title">SOLUTION STATEMENT</div>
        <div className="al-solution-statement-content">
          <p>Gamified learning experience that adapts to the students pace.</p>
        </div>
      </div>

      <div className="al-wireframes">
        <div className="al-mini-title">WIREFRAMES</div>
        <p className="al-subtitle">
          We started ideating on game concept models that would capture the following attributes mentioned below.
        </p>
        <div className="al-wireframes-content">
          <p className="al-wireframe-title">Explore</p>
          <div className="al-wireframe">
            <img src={s1} />
            <p>We gamified the process of exploring. Concepts enable the students to take any path they wished to take to learn. So each student can have a different and unique path.</p>
          </div>
          <p className="al-wireframe-title">Learn</p>
          <div className="al-wireframe">
            <img src={s2} />
            <p>
              We also added promts along the path for the students to make sense of the relationship between each concept as the chapters progressed.
              <br/><br/>
              There are default base concepts for each chapter. The student can choose to start from any of these starting points. Also, once they click on the concept/chapter they have access to all the learning material needed.
            </p>
          </div>
          <p className="al-wireframe-title">Self-assess</p>
          <div className="al-wireframe">
            <img src={s3} />
            <p>
              A chapter level test would assess the student’s knowledge on all the concepts within the chapter. Similar, the concept level test was more specific and less time taking. The student can see on an average what position he/she scored. There is no pass/fail system during testing.
              <br/><br/>
              The test can be retaken and it will adjust the difficulty based on the students knowledge.
            </p>
          </div>
          <p className="al-wireframe-title">Reward</p>
          <div className="al-wireframe">
            <img src={s4} />
            <p>
              We researched a lot and thought through a lot of reward systems including the point/coin based reward systems. Later settled on something that could be less competitive but yet gain a students sense of belonging.
              <br/><br/>
              We went ahead to incorporate avatars/badges that a student could unlock during the process. Which would distinguish them and create a unique identity amongst their peers.
            </p>
          </div>
        </div>
      </div>

    </Layout>
  )
}
