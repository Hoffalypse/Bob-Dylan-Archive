
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
                path="/Bob-Dylan-Archive"
                element={<Building/>}
              />
               <Route
                exact
                path="/Bob-Dylan-Archive/homepage"
                element={<Homepage/>}
              />
    </Routes>
    </Router>
  </>
  );
}

export default App;
