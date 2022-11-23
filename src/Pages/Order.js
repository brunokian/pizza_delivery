const Order = ({ pizza }) => {
  return(
    <>
      <h2>Thanks</h2>
      <p>you ordered a { pizza.base } pizza with:</p>
      {pizza.toppings.map((item) => <div key={item}>{item}</div>)}
    </>
  )
}

export default Order;