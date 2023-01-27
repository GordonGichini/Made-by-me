import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/layout/Navbar";  
import Dashboard from './components/Dashboard/Dashboard'


class App extends Component {
  render() {
    return ( 
    <BrowserRouter>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path='/' component={Dashboard} />
        </Routes>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
