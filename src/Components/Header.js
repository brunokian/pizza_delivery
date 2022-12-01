import { motion } from 'framer-motion'

const Header = () => {
  return(
    <div className="header">
      <img className="pizza-logo" src="pizza-logo.png" alt="logo"/>
      <motion.h1 className="tittle"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
      >PIZZA DELIVERY</motion.h1>
    </div>
  )
}

export default Header;