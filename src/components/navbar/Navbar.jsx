import React, {useState} from 'react'
import { RiMenu3Line,RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () =>(
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#whathrc">What is hrc</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case study</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="hrc__navbar">
      <div className="hrc__navbar-links">
        <div className="hrc__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="hrc__navbar-links_containers">
          <Menu />
        </div>
      </div>
      <div className="hrc__navbar-sign">
        <p>Sign in</p>
        <button type="buton">Sign up</button>
      </div>
      <div className="hrc__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() =>setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() =>setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="hrc__navbar-menu_containers scale-up-center">
            <div className="hrc__navbar-menu_containers-links">
              <Menu />
              <div className="hrc__navbar-menu_containers-links-sign">
                <p>Sign in</p>
                <button type="buton">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar