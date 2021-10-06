import './App.css';
import NavigationBar from './components/MenuComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carosul  from "./components/carousel";
import About from './pages/About';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <NavigationBar />
          <Carosul></Carosul>
        </Route>
        <Route path="/aboutus">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
