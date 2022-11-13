import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Components/scss/auth.scss";
import NavbarComp from './Components/NavbarComp';
import React from "react";
import ReactDOM from "react-dom";


function App() {
  return (
    <div className="App">
      
      <NavbarComp/>

    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
