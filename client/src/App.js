
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from './Components/Navbar';
import Homepage from "./pages/Homepage";
import Building from "./pages/Building";



function App() {
  return (
  <>  
   <AppNavbar/>
   
   <Router>
   <Routes>
              <Route
                exact
                path="/"
                element={<Building/>}
              />
               <Route
              
                path="/homepage"
                element={<Homepage/>}
              />
    </Routes>
    </Router>
  </>
  );
}

export default App;
