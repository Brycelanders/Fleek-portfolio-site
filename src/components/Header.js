// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Bryce Landers" />

            <div className='header__content'>
                <h1>Hi, I'm Bryce Landers</h1>
                <p>Ethereum Blockchain Developer</p>
                <a href="mailto:brycelanders20@icloud.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;