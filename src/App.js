import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactUs from "./components/ContactUs/ContactUs"
import Header from "./components/Header/Header"
import BodyPage from './components/BodyPage/BodyPage';
function App() {
  return (
    <div className="App">
      <Header />
      <BodyPage />
      <ContactUs />
    </div>
  );
}

export default App;
