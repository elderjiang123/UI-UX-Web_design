import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="hrc__header section__padding" id="home">
      <div className="hrc__header-content">
        <h1 className="gradient__text">Just do it!!!!</h1>
        <p>My First Web Design Project</p>
        <div className="hrc__header-content__input"> 
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div>

        <div className="hrc__header-content__people">
          <img src={people} alt="people"/>
          <p>Still Studying</p>
        </div>
      </div>
      <div className="hrc__header-image">
          <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default Header