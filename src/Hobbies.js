import { Link } from 'react-router-dom';
const Hobbies = () => {
    return (
        <div>
            <header>
                <ul className='navigation'>
                    <Link to="/">Home </Link>
                    <Link to="/aboutme">About Me </Link>
                    <Link to="/skills">Skills </Link>
                    <Link to="/contact">Contact Me </Link>
                </ul>
            </header>
            <h1>My Hobbies</h1>
            <div className='hobbies'>
                <h3>Fishing</h3>
                <p>Fishing i'ts like yoga for me. I feel all of my body relaxed and I don't even notice when 8 hours 
                    have passed :). I like to fish every season of the year and sometimes I can be gone for few 
                    days on a fishing trip. It's fun and relaxing!</p>
                <h3>Video Games</h3>
                <p>I love video games, both for PC and console. Until 2013 I played only on PC but after 2013 I 
                    started the transition to console world. It began with PS3 and God of War games. After PS3 I 
                    bought PS4 of course and in 2019 i sold my gaming PC that i built myself from scratch and bought 
                    Xbox One X because I Wanted to play all the Halo games and Gears of Wars series. Now after 
                    2 years It's time to upgrade to the latest Xbox console</p>
                <h3>Building Stuff</h3>
                <p>I like to make puzzle. I framed my 500, 1000 and 2000 pieces puzzles.</p>
                <p>I love Lego</p>
                <p>IoT stuff. I built my own temperature and humidity sensor and it was exciting. My second project 
                    will be a water pump for plants</p>
                <h3>Board Games</h3>
                <p>I like to play board games with my friends. Every type of game is welcomed in my house.</p>
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

export default Hobbies
