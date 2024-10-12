import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/photo1.jpeg'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='mainPage' style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='order'>
        <Link to="/menu">
        <button> Sipariş Ver
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
