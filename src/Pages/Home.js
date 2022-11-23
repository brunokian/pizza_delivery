import { Link } from "react-router-dom";

const Home = () => {
  return(
    <div className="home container">
      <h1>Welcome to Delivery Pizza!</h1>
      <Link to="/base">
        <button>Create your pizza</button>
      </Link>
    </div>
  )
}

export default Home;