import "./App.css";
import NavigationBar from "./components/MenuComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Carousel from "./components/carousel";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Carousel></Carousel>
    </div>
  );
}

export default App;
