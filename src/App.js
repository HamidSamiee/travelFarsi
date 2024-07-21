import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './Components/Pages/home';
import Navbar from './Components/navbar/navbar';
import Footer from './Components/Footer/footer';
import Tourism from './Components/Pages/tourism';
import Tour from './Components/Pages/tour';
import Signup from './Components/Pages/signup';
import ScrollToTop from './Components/ScrolTOTop';


function App() {
  return (
    <React.Fragment>
      <Router>
        <ScrollToTop smooth />
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tourism' element={<Tourism />} />
          <Route path='/tour' element={<Tour />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>  
  );
}

export default App;
