import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import Register from "./Register";
import Main from "./Main";

  function RoutesApp(){
      return(
          <Router>          
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/" element={<Main/>} />  
                
            </Routes>
          </Router>
      )
  }

  export default RoutesApp