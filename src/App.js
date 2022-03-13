import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="App">
      <header>
        <button className='jedi' onClick={() => setDarkMode(!darkMode)}>Welcome to the Dark Side <i className="fa-brands fa-sith"></i></button>
          <ul className='navigation'>
            <Link to="/aboutme">About Me </Link>
            <Link to="/hobbies">My Hobbies </Link>
            <Link to="/skills">Skills </Link>
            <Link to="/contact">Contact Me </Link>
          </ul>
      </header>
      <div className='top-container'>
        <h1>I'm Razvan.</h1>
        <h2>a programmer padawan <i className="fa-brands fa-jedi-order"></i></h2>
      </div>
      <div className='middle-container'>
        <div className='profile'>
          <h2>Hello</h2>
          <p className='intro'>Hello. I am a frontend student with focus on webb security</p>
          <hr/>
        </div>
        <div className='contact-me'>
          <h2>Get In Touch</h2>
          <h3>let's connect</h3>
          <Link to="/contact">Contact Me </Link>
          <p className='contact-message'>
            <b>I'm Broke</b>. So when I say <i>"Call me if you need anything"</i>, 
            I'm refering to hugs, prayer or words of encouragement. You know... the free stuff.
          </p>
        </div>
      </div>
      <div className='bottom-container'>
        <a className='footer-link' href='https://www.linkedin.com/feed/'><i className="fa-brands fa-linkedin"></i></a>
        <a className='footer-link' href='https://www.facebook.com/'><i className="fa-brands fa-facebook"></i></a>
        <a className='footer-link' href='https://www.instagram.com/'><i className="fa-brands fa-instagram"></i></a>
        <button className='scroll-upp-btn' onClick={() => {window.scrollTo({top:0, behavior: "smooth"})}}><i className="fa-solid fa-arrow-up"></i></button>
        <p className="copyright"><i className="fa-regular fa-copyright"></i> Georgescu D. Razvan</p>
        {/* <p class="copyright">© Georgescu D. Razvan.</p> */}
      </div>
    </div>
  );
}

export default App;
