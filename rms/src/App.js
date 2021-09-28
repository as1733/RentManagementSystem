import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/MenuComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carosul  from "./components/carousel";
function App() {
  return (

    <div className="App">
      <NavigationBar />
        <Carosul></Carosul>
    </div>
  );
}

export default App;
