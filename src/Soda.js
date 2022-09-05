import { Link } from "react-router-dom";

/** Soda component: displays a bag of soda */

function Soda(){
  
  return (
    <div className="Soda">
      <h1>Soda</h1>
      <h2>
        <Link to="/">Go Back to Vending Machine</Link>
      </h2>
    </div>
  )
}

export default Soda;