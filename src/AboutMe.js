const AboutMe = () => {
    return (
        <div>
            <h1>About Me</h1>
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

export default AboutMe
