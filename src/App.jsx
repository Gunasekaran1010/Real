import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import './App.css';
import Companies from "./Companies/Companies";
import Residences from "./Residences/Residences";
import Values from "./Values/Values";
import Contact from "./Contact/Contact";
import Getstarted from "./Getstarted/Getstarted";
import Footer from "./Footer/Footer";

function App() {
  return (

    <div className="App">
        <div >

          <div className="white-gradient" />
        <Header />
        <Hero />

        </div>

        <Companies />
        <Residences />
        <Values />
        <Contact />
        <Getstarted />
        <Footer />
    </div>

  );
}

export default App;
