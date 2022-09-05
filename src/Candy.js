import { Link } from "react-router-dom";

/** Candy component: displays a bag of candy */

function Candy(){
  
  return (
    <div className="Candy">
      <h1>Candy</h1>
      <h2>
        <Link to="/">Go Back to Vending Machine</Link>
      </h2>
    </div>
  )
}

export default Candy;