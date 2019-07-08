import React, { Component } from 'react';
import './vendors/css/normalize.css';
import './vendors/css/animate.css';
import './resources/css/style.css';
import './resources/css/queries.css';
import './resources/js/myScript';
import 'waypoints/lib/jquery.waypoints.min.js';
import NavBar from './components/navBar';
import FeaturesSection from './components/featuresSection';
import MenusSection from './components/menusSection';
import LocationSection from './components/locationSection';
import TestimonalSection from './components/testimonalSection';
import CreatorsSection from './components/creatorsSection';
import OpinionForm from './components/opinionForm';
import FooterComponent from './components/footerComponent';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

class App extends Component {

  constructor() {
    super()
    this.state = {
      heartCount: 0
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:5000/heart_count')
  //     .then(response => response.json())
  //     .then(data => { 
  //       const heartCount = data[0].heartCount
  //       this.setState({ heartCount })
  //     })
  // }
    
  render() { 
    
    return (  
      <React.Fragment>
        <header>
          <div className="container">
            <NavBar />
            <div className="hero-text-box">
              <h1>What's Up! Foodie.<br />Feeling Hungry?</h1>
              <a className="nb-btn nb-btn-full" rel="noopener noreferrer" target="_blank" href="https://www.swiggy.com/restaurants/polas-harbour-lounge-infantry-road-vijayanagar-colony-ballari-107321">Order On Swiggy</a>
              <a className="nb-btn nb-btn-ghost" href="#features">Show me more</a>
            </div>
          </div>
        </header>
        <FeaturesSection />
        <MenusSection />
        <LocationSection />
        <TestimonalSection />
        <CreatorsSection />
        <OpinionForm />
        <FooterComponent />
      </React.Fragment>
    );
  }
}
 
export default App;

