import { Link } from 'react-router-dom';
import { useState } from 'react';

const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        phonenumber: ""
    })
    const handleChange = (event) => {
        setContactInfo({...contactInfo, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(contactInfo)
        setContactInfo({ name:"", email: "", phonenumber: ""})
    }

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

            {/* tutorial gasit pe net */}
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Contact me</h1>
                </div>
                <div>
                    <input type="text" name="name" placeholder="Name" value={contactInfo.name} onChange={handleChange}/>
                </div>
                <div>
                    <input type="email" name="email" placeholder="email" value={contactInfo.email} onChange={handleChange}/>
                </div>
                <div>
                    <input type="number" name="phonenumber" placeholder="Phone Number" value={contactInfo.phonenumber} onChange={handleChange}/>
                </div>
                <div>
                    <button className='contact-btn' >Submit Contact</button>
                </div>
            </form>

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

export default Contact
