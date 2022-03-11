import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <header>
                <ul className='navigation'>
                    <Link to="/">Home </Link>
                    <Link to="/aboutme">About Me </Link>
                    <Link to="/hobbies">My Hobbies </Link>
                    <Link to="/skills">Skills </Link>
                </ul>
            </header>
            <h1>Contact me</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="name@example.com" style={{width: '50%', margin: '0 auto'}}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" style={{width: '50%', margin: '0 auto'}}></textarea>
            </div>
            <div className='bottom-container' style={{position: 'fixed', bottom: '0', width: '100%'}}>
                <a className='footer-link' href='https://www.linkedin.com/feed/'><i class="fa-brands fa-linkedin"></i></a>
                <a className='footer-link' href='https://www.facebook.com/'><i class="fa-brands fa-facebook"></i></a>
                <a className='footer-link' href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>
                <button className='scroll-upp-btn' onClick={() => {window.scrollTo({top:0, behavior: "smooth"})}}><i class="fa-solid fa-arrow-up"></i></button>
                <p class="copyright"><i class="fa-regular fa-copyright"></i> Georgescu D. Razvan</p>
                {/* <p class="copyright">© Georgescu D. Razvan.</p> */}
            </div>
        </div>
    )
}

export default Contact
