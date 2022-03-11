import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <div>
            <header>
                <ul className='navigation'>
                    <Link to="/">Home </Link>
                    <Link to="/aboutme">About Me </Link>
                    <Link to="/hobbies">My Hobbies </Link>
                    <Link to="/contact">Contact Me </Link>
                </ul>
            </header>
            <h1>My Skills</h1>
            <div className='bottom-container' style={{position: 'fixed', bottom: '0', width: '100%'}}>
                <a className='footer-link' href='https://www.linkedin.com/feed/'><i className="fa-brands fa-linkedin"></i></a>
                <a className='footer-link' href='https://www.facebook.com/'><i className="fa-brands fa-facebook"></i></a>
                <a className='footer-link' href='https://www.instagram.com/'><i className="fa-brands fa-instagram"></i></a>
                <button className='scroll-upp-btn' onClick={() => {window.scrollTo({top:0, behavior: "smooth"})}}><i class="fa-solid fa-arrow-up"></i></button>
                <p className="copyright"><i className="fa-regular fa-copyright"></i> Georgescu D. Razvan</p>
                {/* <p class="copyright">© Georgescu D. Razvan.</p> */}
            </div>
        </div>
    )
}

export default Skills