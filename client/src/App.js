import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import "../src/App.css"

//Loading all styling modules
import staticFeatures from "./css-modules/static.module.css";

import classicStyle from "./css-modules/classic.module.css";
import modernStyle from "./css-modules/modern.module.css";

//Loading configuration
import configData from './config/barber-site.config.json';

//Loading components
import Home from "./components/home.page";
import AboutUs from "./components/about-us.page";
import Bookings from "./components/bookings.page";
import GalleryPage from "./components/gallery.page";
import ContactUs from "./components/contact-us.page";
import Socials from "./components/social-media-panel.component";

//Importing styling resources
import { faBook, faContactCard, faHome, faImage, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@fontsource/space-grotesk";

//Determine website styling module from the config file
const websiteStyle = (function() {
  if (configData.STYLE === "classic"){
    return classicStyle
  }else if (configData.STYLE === "modern"){
    return modernStyle
  }
})();

function App() {
  return (
    <Router>
    <div className={staticFeatures.mainContainer}>  
      {/*Header:*/}
      <div className={[staticFeatures.parallaxHeader, websiteStyle.header].join(' ')}/>
      {/*.pageLayout determines a suitable page layout based on the chosen styling of its menu.*/}
      <div className={staticFeatures.pageLayout}>
        {/*Menu: .headerMenu, .stackMenu .stackMenuRight*/}
        <div className={[staticFeatures.headerMenu, websiteStyle.menu].join(' ')}>
            <div className={staticFeatures.menuButton}>
              <Link to="/home">
                <button className={websiteStyle.menuButton} type="button"><FontAwesomeIcon icon={faHome}/> Home</button>
              </Link>
            </div>

            <div className={staticFeatures.menuButton}>
              <Link to="/about-us">
                <button className={websiteStyle.menuButton} type="button"><FontAwesomeIcon icon={faInfoCircle}/> About us</button>
              </Link>
            </div>

            <div className={staticFeatures.menuButton}>
              <Link to="/bookings">
                <button className={websiteStyle.menuButton} type="button"><FontAwesomeIcon icon={faBook}/> Bookings</button>
              </Link>
            </div>

            <div className={staticFeatures.menuButton}>
              <Link to="/gallery">
                <button className={websiteStyle.menuButton} type="button"><FontAwesomeIcon icon={faImage}/> Gallery</button>
              </Link>
            </div>

            <div className={staticFeatures.menuButton}>
              <Link to="/contact">
                <button className={websiteStyle.menuButton} type="button"><FontAwesomeIcon icon={faContactCard}/> Contact</button>
              </Link>
            </div>
        </div>
        
        {/*Page: this will dynamically render pages of the websites depending on the url the user is currently on using react-router-dom.*/}
        <div>  
          <div className={[staticFeatures.mainTitle, websiteStyle.mainTitle].join(' ')}>{configData.TITLE}</div>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/bookings" element={<Bookings/>}/>
            <Route path="/gallery" element={<GalleryPage/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
          </Routes>
        </div>
      </div>

      {/*Footer: Setup as fixed bar at the bottom of the screen with 3 parts; left, centre & right.*/}
      <div className={[staticFeatures.footer, websiteStyle.footer].join(' ')}>
        {/*Left*/}
        <div></div>
        {/*Center*/}
        <div></div>
        {/*Right*/}
        <div><Socials/></div>
      </div>
    </div>
    </Router>
  );
}

export default App;
 