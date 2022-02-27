import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='top-container'>
        <h1>I'm Razvan.</h1>
        <h2>a programmer padawan</h2>
      </div>
      <div className='middle-container'>
        <div className='profile'>
          <h2>Hello</h2>
          <p className='intro'>Scurta introducere despre mine</p>
          <Link to="/aboutme">About Me </Link>
          <Link to="/hobbies">My Hobbies </Link>
          <hr/>
        </div>
        <div className='skills'>
          <h2>My Skills</h2>
          <div className='skill-row'> 
            <h3>Skill 1</h3>
            <p>descriere skill 1</p>
          </div>
          <div className='skill-row'> 
            <h3>Skill 2</h3>
            <p>descriere skill 2</p>
          </div>
          <Link to="/skills">Skills </Link>
        </div>
        <hr/>
        <div className='contact-me'>
          <h2>Get In Touch</h2>
          <h3>titlu de contact</h3>
          <p className='contact-message'>
            text funny de contact
          </p>
          <Link className='btn' to="/contact">Contact Me </Link>
        </div>
      </div>
      <div className='bottom-container'>
        <a className='footer-link' href='https://www.linkedin.com'>LinkedIn</a>
        <a className='footer-link' href='https://www.twitter.com'>Twitter</a>
        <a className='footer-link' href='https://www.appbrewery.com'>Website</a>
        <p class="copyright"><i class="fa-regular fa-copyright"></i> Georgescu D. Razvan.</p>
        {/* <p class="copyright">© Georgescu D. Razvan.</p> */}
      </div>
    </div>
  );
}

export default App;
