import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { Routes, Route, Router } from "react-router-dom";
import NavBar from './components/NavBar';
import Top from "./components/Top";
import Footer from "./components/Footer";
const App = () => {
  return(
    <>
    <Top />
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home /> }/>
      <Route exact path="/about" element={<About /> }/>
      <Route exact path="/services" element={<Services /> }/>
      <Route exact path="/contact" element={<Contact /> }/>
    </Routes>
    <Footer />
    </>
  )
}

export default App;
