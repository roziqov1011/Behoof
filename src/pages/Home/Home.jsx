import React from 'react'
import Hero from '../../components/Home/Hero/Hero'
import Social from '../../components/Home/Social/Social'
import New from '../../components/Home/New/New'
import Reviews from '../../components/Home/Reviews/Reviews'

function Home() {
  return (
    <div>
      <Hero/>
      <Social/>
      <New/>
      <Reviews/>
    </div>
  )
}

export default Home