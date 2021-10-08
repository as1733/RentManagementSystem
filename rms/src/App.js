import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/MenuComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carosul  from "./components/carousel";
import CustomCards from "./components/cards";
function App() {
  return (

    <div className="App">
      <NavigationBar />
        <Carosul></Carosul>
        <CustomCards  text="Hello World1"/>
        <CustomCards  text="Hello World2"/>
    </div>
  );
}

export default App;
