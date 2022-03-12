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
            <div className='skills'>
                <h2>My Skills</h2>
                <div className='skill-row'>
                    <h3>Quick learner</h3>
                    <p>I like to learn new things and when I find a hard thing to learn it's hard for me to give up.<i> Nothing easy is worth doing!</i>
                    </p>
                </div>
                <div className='skill-row'>
                    <h3>Top gamer (once upon a time)</h3>
                    <p>I am pretty skilled with shooter games (on PC). When I was 10 years old I was the best in my 
                        neighborhood at Half Life and second at Quake 3 - Arena and then came Counter-Strike 
                        and I was among the best players in town
                    </p>
                </div>
                <div className='skill-row'>
                    <h3>Cook</h3>
                    <p>I like to cook. I have a cooking diploma and everytime I have some free time I cook whatever I want.</p>
                </div>
                <div className='skill-row'>
                    <h3>Football</h3>
                    <p>I played football all my life. I played both professional and every day with my friends, 
                        during and after school</p>
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
    )
}

export default Skills