import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import "../src/App.css"

//Loading all styling modules
import staticFeatures from "./css-modules/static.module.css";
import modernStyle from "./css-modules/modern.module.css";

//Loading configuration
import configData from './config/barber-site.config.json';

//Loading components
import NameHere from "./components/template.page";

//Determine website styling module from the config file
const websiteStyle = (function() {
  if (configData.STYLE === "modern"){
    return modernStyle
  }
})();

//Used to refresh page
function refresh(){
  setTimeout(function(){
    window.location.reload();
  });
}

function App() {
  return (
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
          <Router>
            <div className={staticFeatures.menuButton}>
              <Link to="/home">
                <button onClick={refresh} className={websiteStyle.menuButton} type="button">Home</button>
              </Link>
            </div>

            <div className={staticFeatures.menuButton}>
              <button className={websiteStyle.menuButton} type="button">About us</button>
            </div>

            <div className={staticFeatures.menuButton}>
              <button className={websiteStyle.menuButton} type="button">Bookings</button>
            </div>

            <div className={staticFeatures.menuButton}>
              <button className={websiteStyle.menuButton} type="button">Gallery</button>
            </div>

            <div className={staticFeatures.menuButton}>
              <button className={websiteStyle.menuButton} type="button">Contact</button>
            </div>

            <div className={staticFeatures.menuButton}>
              <button className={websiteStyle.menuButton} type="button">Prices</button>
            </div>
          </Router>
        </div>
        
        {/*Page: this will dynamically render pages of the websites depending on the url the user is currently on using react-router-dom.*/}
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<NameHere/>}/>
              <Route path="/home" element={<NameHere/>}/>
            </Routes>
          </Router>
        </div>
       
      </div>
    </div>
  );
}

export default App;
 