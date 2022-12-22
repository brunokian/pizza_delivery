import React, { useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Pages/Home'
import Base from './Pages/Base'
import Order from './Pages/Order'
import Toppings from './Pages/Toppings'
import './App.css'
import { AnimatePresence } from 'framer-motion';
import Modal from './Components/Modal';

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base:"", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addToppings = (topping) => {
    let newToppings = [];
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping]
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping)
    }
    setPizza({ ...pizza, toppings: newToppings })
  }

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home setShowModal={setShowModal}/>
          </Route>
          <Route path="/base">
            <Base addBase={ addBase } pizza={ pizza }/>
          </Route>
          <Route path="/Order">
            <Order pizza={ pizza } setShowModal={ setShowModal }/>
          </Route>
          <Route path="/toppings">
            <Toppings addToppings={ addToppings } pizza={ pizza }/>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
