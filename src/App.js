import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Graduates from './components/Graduates';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Graduates />
      </div>
    </div>
  );
}

export default App;
