import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0, 
    x: '100vw'
  },
  visible: {
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', mass: 0.4, damping: 8, when: "beforeChildren", staggerChildren: 0.5 }
  },
}

const childrenVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza }) => {
  const [showThanks, setShowThanks] = useState(true);
  setTimeout(() => {
    setShowThanks(false)
  }, 4000)

  return(
    <motion.div className="order container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >

      <h2 exit={{ y:-1000 }}>Thanks!!</h2>

      
      
      <motion.p variants={childrenVariants}>
        you ordered a { pizza.base } pizza with:</motion.p>
      <motion.div variants={childrenVariants}>
        {pizza.toppings.map((item) => <div key={item}>{item}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;