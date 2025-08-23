import './Pages.css';
import BackToHome from './BackToHome';
import TicTacToe from './TicTacToe';

export default function About() {
    return (
        <div className='about'>
            <h1>About</h1>
            <p>Welcome to my portfolio! Maybe I will add something here in the future...</p> 
            <TicTacToe />
            <BackToHome />
        </div>
    );
}