import { Link } from "react-router-dom";

/** Chips component: displays a bag of chips */

function Chips(){
  
  return (
    <div className="chips">
      <h1>Chips</h1>
      <h2>
        <Link to="/">Go Back to Vending Machine</Link>
      </h2>
    </div>
  )
}

export default Chips;