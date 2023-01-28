import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className="header">
      <Link to="/">
        <img className="pizza-logo" src="pizza-logo.png" alt="logo"/>
      </Link>
      <motion.h1 className="tittle"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 90 }}
      >PIZZA DELIVERY</motion.h1>
    </div>
  )
}

export default Header;