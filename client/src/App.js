import { BrowserRouter as Router} from "react-router-dom";
import "../src/App.css"

import TabsBar from "./components/tabs-bar";

function App() {
  return (
    <div>
      <Router>

        <TabsBar />

      </Router>
    </div>
  );
}

export default App;
 