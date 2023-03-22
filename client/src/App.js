import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import "../src/App.css"

//Loading all styling modules
import staticFeatures from "./css-modules/static.module.css";
import modernStyle from "./css-modules/modern.module.css";

//Loading configuration
import configData from './config/barber-site.config.json';

//Loading components
//import NameHere from "./components/template.page";
import Home from "./components/home.page";
import AboutUs from "./components/about-us.page";
import Bookings from "./components/bookings.page";
import GalleryPage from "./components/gallery.page";
import ContactUs from "./components/contact-us.page";
import Socials from "./components/social-media-panel.component";
import { faBook, faContactCard, faHome, faImage, faInfo, faInfoCircle, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Determine website styling module from the config file
const websiteStyle = (function() {
  if (configData.STYLE === "modern"){
    return modernStyle
  }
})();

function App() {
  return (
    <Router>
    <div>  
      {/*Header: it is setup as a fixed element.*/}
      <div className={staticFeatures.titleRight}>
               <div className={websiteStyle.h1}>{configData.TITLE}</div>
      </div>

      {/*Setting general page layout.*/}
      <div className={staticFeatures.menuLeftLayout}>
        {/*Menu: it can be conceptualised as a stack of buttons which re-route the user to the desired page, which has a non-functional header section.*/}
        <div className={websiteStyle.menu}>
          <div className={staticFeatures.menuTop}>
            <div className={websiteStyle.menuTop}></div>
          </div>
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
 