import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  
  return(
    <motion.div className='base container'
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', delay: 0.5 }}
    >
      <h1>Choose your base</h1>
      <ul>
        {
          bases.map((base) => {
            let spanClass = pizza.base === base ? 'active' : '';
            return(
              <motion.li key={base} onClick={() => addBase(base)}
                whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className={spanClass}>{ base }</span>
              </motion.li>
            )
          })
        }
      </ul>

      {
        pizza.base && (
          <motion.div className='next'
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <Link to="/toppings">
              <motion.button
                whileHover={{ 
                  scale: 1.1,
                  textShadow: '0px 0px 8px rgb(255, 255, 255)',
                  boxShadow: '0px 0px 8px rgb(255, 255, 255)'
                }}
              >Next</motion.button>
            </Link>
          </motion.div>
        )
      }
    </motion.div>
  )
}

export default Base;