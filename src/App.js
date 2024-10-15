import "./App.css";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Navbar} />
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
