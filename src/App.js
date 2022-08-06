import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Graduates from './components/Graduates';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './components/Login';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="app">
      <Header />
      {!user ? (<Login />) : (
        <div className="app__body">
          <Graduates />
        </div>
      )}
    </div>
  );
}

export default App;
