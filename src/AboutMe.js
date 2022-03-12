import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div>
            <header>
                <ul className='navigation'>
                    <Link to="/">Home </Link>
                    <Link to="/hobbies">My Hobbies </Link>
                    <Link to="/skills">Skills </Link>
                    <Link to="/contact">Contact Me </Link>
                </ul>
            </header>
            <h1>About Myself</h1>
            <div className='description'>
                <h3>A short description about myself</h3>
                <p>Heloo. My name is Razvan Georgescu and I am 32 years young :). I am married and I have a 
                    2 years old boy. My own MiniMe</p>
                <p>I was born in Bucharest, Romania and I came to Sweden in 2011. Since then I worked as a 
                    'personlig assistent' and at the same time I studied SFI and all the stages of swedish language. 
                    After 6 years, I wanted to change my profession and worked as a courier driver for DHL Express</p>
                <p>After the last jobb experience, I said to myself that I need to find a steady jobb with good income. 
                    That is when I decided to find a job in IT. At first I needed to do some classes to fullfill 
                    the demands for an IT education. After I became qualified to start an IT education, I got a place 
                    at Nackademin as 'Internet of Things developer' but after 4 months i needed to work full-time 
                    because my wife was pregnant and I lost my place in school</p>
                <p>After a while I decided to become a Frontend Developer and I was very happy when I got a spot at Jensen 
                    Yrkeshögskola. Now I am almost half way down with my education and I'm very excited to start working in 
                    this area of IT</p>
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
    )
}

export default AboutMe
