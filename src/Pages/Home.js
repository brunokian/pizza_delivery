import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const buttonVariants = {
  visible: {
    x: -20,
    transition: { delay: 2 }
  },
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    }
  }
}

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1.5 }
  },
  exit: {
    x: '-100vw',
    transition: {ease: 'easeInOut'}
  }
}

const Home = ({ setShowModal }) => {
  // useEffect (() => {
  //   setShowModal(false)
  // });

  return(
    <motion.div className="home container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h1>Welcome to Delivery Pizza!</h1>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          animate="visible"
          whileHover="hover"
        >Create your pizza</motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;