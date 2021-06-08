import Home from './pages/home';

import {
  BrowserRouter as Router, Route, 
} from "react-router-dom";
import Details from './pages/details';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/details" exact component={Details} />
    </Router>
  );
}

export default App;
