import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App"></div>
      <Searchbar />
    </div>
  );
}

export default App;
