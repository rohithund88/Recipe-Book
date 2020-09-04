import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Container/Home/Home';
import SearchRecipe from './Container/SearchRecipe/SearchRecipe';
import AboutUs from './Container/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebook,faGoogle,faTwitter,faInstagramSquare,faYoutube } from '@fortawesome/free-brands-svg-icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter as Router, Switch,Route, Redirect} from 'react-router-dom';
import './App.css';




library.add(fab, faGoogle, faFacebook,faTwitter,faInstagramSquare,faYoutube);


function App() {
  return (
    <>
      <Router>
      <Switch>
            <div >
              <Navbar/> 
              <div className="mt-5">
              <Route path= "/" exact component={Home}/>
              <Route path= "/search" component={SearchRecipe}/> 
              <Route path= "/about" component={AboutUs}/>
              </div>
              <Redirect to ="/"/>                       
              <Footer/>
              </div>  
              
         </Switch>
         </Router>
      </>
   );
}

export default App;
