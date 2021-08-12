import "./App.css";
import Homescreen from "./screens/Homescreen";
import Productscreen from "./screens/Productscreen";
import "./bootstrap.min.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homescreen } exact/>
      <Route path="/product/:id" component={Productscreen } />
    </div>
  );
}

export default App;
