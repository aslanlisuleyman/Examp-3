import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='foo'>

 <div className='foote'>
        <div className='bas'>
         <h3>Tasty</h3>
         <p>Far far away, behind the word mountains, <br /> far from the countries Vokalia <br /> and Consonantia, there live <br /> the blind texts.</p>
         <div className='ic'>
            <p><i class="fa-brands fa-twitter"></i></p>
            <p><i class="fa-brands fa-facebook"></i></p>
            <p><i class="fa-brands fa-instagram"></i></p>
         </div>


        </div>
        <div className='h' >
            <h3>Opening Hours</h3>
            <ul>
                <li>Monday: 08: - 22:00</li>
                <li>Tuesday: 08: - 22:00</li>
                <li>Wednesday: 08: - 22:00</li>
                <li>Thursday: 08: - 22:00</li>
                <li>Friday: 08: - 22:00</li>
                <li>Saturday: 08: - 22:00</li>
                <li>Sunday: 08: - 22:00</li>
            </ul>
        </div>
        <div className='ba'>

            <h3>Contact  Information</h3>
            <p>198 West 21th Street, Suite 721</p>
            <p>New York NY 10016</p>
            <p>+ 1235 2355 98</p>
            <p>info@yoursite.com</p>
            <p>email@email.com</p>
        </div>
        <div className='b'>
            <h3>Newsletter</h3>
            <p>Far far away, behind the word</p>
            <p>mountains, far from the countries.</p>
            <input class="input" placeholder="Subscribe"></input>
        </div>


        
    </div>
    <div className='p'>  <p> Copyright ©2024 All rights reserved | This template is made with  <i class="fa-regular fa-heart"></i>   by Colorlib</p></div>

  

    </div>
   
  )
}

export default Footer