import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='top-container'>
        <h1>I'm Razvan.</h1>
      </div>
      <Link to="/aboutme">About Me </Link>
      <Link to="/skills">Skills </Link>
      <Link to="/hobbies">My Hobbies </Link>
      <Link to="/contact">Contact Me </Link>
    </div>
  );
}

export default App;
