import { Link } from 'react-router-dom'

const Toppings = ({ addToppings, pizza }) => {
  const toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return(
    <>
      <h1>choose toppings</h1>
      <ul>
        {
          toppings.map((topping) => {
            return (
              <li key={topping} onClick={ () => addToppings(topping) }>
                <span>{ topping }</span>
              </li>
            )
          })
        }
      </ul>
      <Link to="/order">
        <button>Order</button>
      </Link>
    </>
  )
}

export default Toppings;