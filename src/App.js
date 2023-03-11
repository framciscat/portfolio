import Navbar from "./components/Navbar";
import './App.css'
import Intro from "./components/Intro";
import Services from "./components/Services";
import Portolio from "./components/Portolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" 
    style={{background: darkMode? 'black': '',
    color: darkMode? 'white': ''}}>
     <Navbar/>
     <Intro/>
     <Services/>
     <Portolio/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
