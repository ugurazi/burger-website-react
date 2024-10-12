import React from 'react'
import BannerImage from '../assets/photo1.jpeg'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${BannerImage})`}}>
      </div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis accumsan dapibus. Maecenas elit ipsum, vulputate ut convallis a, dignissim sit amet magna. Etiam quis lacus a ipsum malesuada bibendum et nec tellus. Maecenas augue nisl, tempor a dignissim ut, pharetra quis lacus. Donec vitae luctus sapien. In at tortor velit. Nullam elementum pellentesque urna eget vulputate. Suspendisse elit mauris, varius eu mollis nec, vehicula vel risus. Morbi metus nisl, consectetur non erat at, interdum porta augue. Quisque id ultricies orci. Pellentesque vehicula lobortis sapien sit amet interdum. Aliquam accumsan luctus malesuada.
        Sed eget rutrum nibh. Maecenas et eleifend sem. Mauris ac commodo felis, vel molestie lorem. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec euismod dolor sit amet mattis lacinia. Duis cursus neque a odio ornare, quis placerat neque malesuada. Morbi cursus orci nulla, nec venenatis lectus pellentesque in. In a turpis elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean pretium fermentum lobortis. Etiam sit amet feugiat libero. Quisque at est enim. Sed maximus, ligula non tempus vehicula, diam purus ultricies diam, sed porta erat quam at nisi. Vivamus convallis magna orci, quis consectetur erat euismod id.
        </p>
      </div>
      
    </div>
  )
}

export default About
