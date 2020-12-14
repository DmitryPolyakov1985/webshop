import './App.css';
import {data} from './data/data';

// import components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured data={data} />
      <Footer />
    </div>
  );
}

export default App;
