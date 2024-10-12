import React from 'react'
import BannerImage from '../assets/burger.jpg'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${BannerImage})`}}>

      </div>
      <div className='rightSide'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type='text' name='name' placeholder='ad soyad'></input>
          <label>E-mail</label>
          <input type='email' name='email' placeholder='email'></input>
          <label>Mesaj</label>
          <textarea rows="6" name='message' placeholder='lütfen mesajını buraya giriniz.'></textarea>
        </form>
      </div>
    </div>
  )
}

export default Contact
