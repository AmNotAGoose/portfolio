import './Pages.css';
import BackToHome from './BackToHome';
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <div className='contact'>
            <h1>Contact</h1>
            <p>Email: <a href='mailto:alexyihengwu@gmail.com'>alexyihengwu@gmail.com</a></p>
            <p>GitHub: <a href='https://github.com/AmNotAGoose' target="_blank" rel="noopener noreferrer">AmNotAGoose</a></p>
            <ContactForm />
            <BackToHome />
        </div>
    );
}