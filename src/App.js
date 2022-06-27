
import './App.css';
import Analytics from './components/analytics';
import Cards from './components/cards';
import Main from './components/main';
import Navbar from './components/navbar';
import Newsletter from './components/newsletter';

function App() {
  return (
    <>
      <Navbar/>
      <Main/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
    </>
  );
}

export default App;
