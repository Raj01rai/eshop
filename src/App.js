import logo from './logo.svg';
import './App.css';

import MuiFooter from './components/MuiFooter/MuiFooter.js';
import MuiAppBar from "./components/MuiAppBar/MuiAppBar.js";
import MuiSignUp from './components/MuiSignUp/MuiSignUp.js';
import MuiLogin from './components/MuiLogin/MuiLogin.js';
import MuiToggleButtons from './components/MuiToggleButtons/MuiToggleButtons.js';
import MuiFilter from './components/MuiFilter/MuiFilter.js';
import MuiCard from './components/MuiCard/MuiCard.js';
import { BrowserRouter as Router, Link} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
;
function App() {
  return (

<Router>
<div className="App">      
<MuiAppBar />
        
<section id="bodyContent"><Routes>
          <Route exact path="/" element={<MuiLogin/>} />
          <Route path="/about" element={<MuiAppBar />} />
          <Route path="/signUp" element={<MuiSignUp/>} />
          <Route path="/login" element={<MuiLogin/>} />
        </Routes>
</section>
        <MuiFooter></MuiFooter>
      </div>
      
    </Router>

        
  );
}


export default App;



