import './App.css';
import Analitycs from './components/Analitycs';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Analitycs/>
    <Newsletter/>
    <Cards/>
    <Footer/>
    </div>

  );
}

export default App;
