import React from 'react'
import Hero from '../../components/Home/Hero/Hero'
import Social from '../../components/Home/Social/Social'
import New from '../../components/Home/New/New'
import Reviews from '../../components/Home/Reviews/Reviews'
import OurGoal from '../../components/Home/OurGoal/OurGoal'
import Choice from '../../components/Home/Choice/Choice'

function Home() {
  return (
    <div>
      <Hero/>
      <Choice/>
      <OurGoal/>
      <Social/>
      <New/>
      <Reviews/>
    </div>
  )
}

export default Home