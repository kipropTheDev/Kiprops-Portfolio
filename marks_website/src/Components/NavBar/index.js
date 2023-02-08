import React, { useState } from 'react'
import {Link} from 'react-scroll'
import Logo from '../../Assets/logo-s.png'
import './index.scss'


function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const [fade, setFade] = useState('has-fade')

  const ToggleMenu = ()=>{
    if(isOpen){
      setIsOpen(false)
      setFade('fade-out')
    }else{
      setIsOpen(true)
      setFade('fade-in')
    }
  }




  return (
    <div className='navbar'>
      <img src={Logo} alt='Simboley' className='navbar__logo'></img>
      <div className='navbar__menu'>

        <a className={`navbar__ham-btn ${isOpen ? 'open' : ''}`} onClick={()=>{ToggleMenu()}}>
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className='navbar__navlinks '>
          <Link activeClass='active' to="about" smooth={true} offset={-50} duration={500}><span>01.</span> About</Link>
          <Link activeClass='active' to="work" smooth={true} offset={-50} duration={500}><span>02.</span> Projects</Link>
          <Link activeClass='active' to="projects" smooth={true} offset={-50} duration={500}><span>03.</span> My Work</Link>
          <Link activeClass='active' to="contact" smooth={true} offset={-50} duration={500}><span>04.</span> Contact</Link>
          <a><button className='navbar__btn'>Resume</button></a>
        </div>
      </div>

      <div className={`navbar__mobile-menu hide-for-large ${fade}`}>
        <div className='dropdown'>
          <Link activeClass='active' to="about" smooth={true} offset={-50} duration={500} onClick={()=>{ToggleMenu()}}><span>01.</span> About</Link>
          <Link activeClass='active' to="work" smooth={true} offset={-50} duration={500} onClick={()=>{ToggleMenu()}}><span>02.</span> Projects</Link>
          <Link activeClass='active' to="projects" smooth={true} offset={-50} duration={500} onClick={()=>{ToggleMenu()}}><span>03.</span> My Work</Link>
          <Link activeClass='active' to="contact" smooth={true} offset={-50} duration={500} onClick={()=>{ToggleMenu()}}><span>04.</span> Contact</Link>
          <a><button className='navbar__btn'>Resume</button></a>
        </div>
      </div>
      

    </div>
  )
}

export default Navbar