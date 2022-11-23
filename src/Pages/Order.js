const Order = ({ pizza }) => {
  return(
    <div className="order container">
      <h2>Thanks!!</h2>
      <p>you ordered a { pizza.base } pizza with:</p>
      {pizza.toppings.map((item) => <div key={item}>{item}</div>)}
    </div>
  )
}

export default Order;