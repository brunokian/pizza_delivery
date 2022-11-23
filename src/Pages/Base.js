import { Link } from 'react-router-dom'

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  
  return(
    <>
      <h1>Choose your base</h1>
      <ul>
        {
          bases.map((base) => {
            return(
              <li key={base} onClick={() => addBase(base)}>
                <span>{ base }</span>
              </li>
            )
          })
        }
      </ul>

      {
        pizza.base && (
          <div>
            <Link to="/toppings">
              <button>Next</button>
            </Link>
          </div>
        )
      }
    </>
  )
}

export default Base;