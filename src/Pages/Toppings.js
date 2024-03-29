import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Toppings = ({ addToppings, pizza }) => {
  const toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return(
    <motion.div className='toppings container'
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', delay: 0.5 }}
      exit={{ x: '-100vw', transition: {ease: 'easeInOut'}}}
    >
      <h1>choose toppings</h1>
      <ul>
        {
          toppings.map((topping) => {
            let spanClass = pizza.toppings.includes(topping) ? 'active' : ''
            return (
              <motion.li key={topping} onClick={ () => addToppings(topping)}
                whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className={spanClass}>{ topping }</span>
              </motion.li>
            )
          })
        }
      </ul>
      <Link to="/order">
        <motion.button
          whileHover={{ 
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255, 255, 255)',
            boxShadow: '0px 0px 8px rgb(255, 255, 255)'
          }}
        >Order</motion.button>
      </Link>
    </motion.div>
  )
}

export default Toppings;