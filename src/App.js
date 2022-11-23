import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Pages/Home'
import Base from './Pages/Base'
import Order from './Pages/Order'
import Toppings from './Pages/Toppings'
import './App.css'

function App() {
  const [pizza, setPizza] = useState({ base:"", toppings: [] })

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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/base">
          <Base addBase={ addBase } pizza={ pizza }/>
        </Route>
        <Route path="/Order">
          <Order pizza={ pizza }/>
        </Route>
        <Route path="/toppings">
          <Toppings addToppings={ addToppings } pizza={ pizza }/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
