
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import "./Header.scss";

const Header = () => {
  return (
    
      
      <div className='swi'>
        <Swiper navigation={true} modules={[Autoplay, Navigation]} className="mySwiper" autoplay={{ delay: 5500 }}>
          <SwiperSlide className='swi1'>
            <div className='hea'>

                <div className='he'>
        <div>
          <h2>Tasty</h2>
        </div>
        <div>
          <ul>
            <Link className='lin' to="/">Home</Link>
            <Link className='lin' to="/basket">Basket</Link>
            <Link className='lin' to="/add">Add</Link>
            <Link className='lin' to="/wishlist">Wishlist</Link>
          </ul>
        </div>
      </div>

      <div><p>Book a table for yourself at a <br /> time  convenient for you</p>
             <div><a href="/" class="bn1">Button</a></div>
      </div>
            </div>
            
        
          </SwiperSlide>
          <SwiperSlide className='swi2'>  <div className='hea'>

                <div className='he'>
        <div>
          <h2>Tasty</h2>
        </div>
        <div>
          <ul>
            <Link className='lin' to="/">Home</Link>
            <Link className='lin' to="/basket">Basket</Link>
            <Link className='lin' to="/add">Add</Link>
            <Link className='lin' to="/wishlist">Wishlist</Link>
          </ul>
        </div>
      </div>
      <div><p>Book a table for yourself at a <br /> time  convenient for you</p>
             <div><a href="/" class="bn1">Book a table</a></div>
      </div>
            </div>

          </SwiperSlide>
          <SwiperSlide className='swi3'>
          <div className='hea'>

                <div className='he'>
        <div>
          <h2>Tasty</h2>
        </div>
        <div>
          <ul>
            <Link className='lin' to="/">Home</Link>
            <Link className='lin' to="/basket">Basket</Link>
            <Link className='lin' to="/add">Add</Link>
            <Link className='lin' to="/wishlist">Wishlist</Link>
          </ul>
        </div>
      </div>
      <div><p>Tasty & Delicious Food</p>
             <div><a href="/" class="bn1">Button</a></div>
      </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
   
  );
}

export default Header;
