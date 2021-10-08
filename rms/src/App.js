import './App.css';
import NavigationBar from './components/MenuComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import Carousel from "./components/carousel";
import About from './pages/About';
import {Switch,Route} from 'react-router-dom';
import PropertyContainer from './components/PropertyContainer';
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <NavigationBar />
          <Carousel></Carousel>
          <PropertyContainer></PropertyContainer>
        </Route>
        <Route path="/aboutus">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
