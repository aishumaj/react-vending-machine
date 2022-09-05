import { Link } from "react-router-dom";

function VendingMachineHome(){
  return (
    <div className="VendingMachine">
      <h1><Link to="/soda">Soda</Link></h1>
      <h1><Link to="/chips">Chips</Link></h1>
      <h1><Link to="/candy">Candy</Link></h1>
    </div>
  )
}

export default VendingMachineHome;