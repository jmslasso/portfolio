import React from 'react'
import './Menu.scss'
import Contact from './Contact'
import { useState } from 'react'


function Menu() {

  const [isOpen, setisOpen] = useState(false)
  return (
    <>
    <div className="header">
      <ul className="nav">
					<li className="nav-item slam-left"><a href="#">Juan Manuel</a></li>
					<li className="nav-item"><a className="contact" onClick={() => setisOpen(true)}>Contact</a></li>
			</ul>
    </div>
    <Contact isOpen={isOpen} setisOpen={setisOpen}/>
    </>
  )
}

export default Menu
