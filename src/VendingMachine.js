import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Chips from "./Chips";
import Soda from "./Soda";
import Candy from "./Candy";
import VendingMachineHome from "./VendingMachineHome";

/** Home page of application: shows different components based on user-chosen 
 * path
 */

function VendingMachine() {

  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachineHome />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/candy" element={<Candy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default VendingMachine;