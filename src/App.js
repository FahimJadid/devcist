import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PromotionalTag from './components/PromotionalTag';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <PromotionalTag />
    </div>
  );
}

export default App;
