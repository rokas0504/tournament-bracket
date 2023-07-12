import './index.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './NavBar';
import Home from './Home';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Route exact parh="/">
            <Home />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
