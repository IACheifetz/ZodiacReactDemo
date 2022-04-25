import './App.css';
import { zodiac } from './data.js';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main zodiac={zodiac}/>
      <Footer />
    </div>
  );
}

export default App;
