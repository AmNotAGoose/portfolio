import './Pages.css';
import BackToHome from './BackToHome';
import TicTacToe from './TicTacToe';

export default function About() {
    return (
        <div className='about'>
            <h1>About</h1>
            <p>Welcome to my portfolio! My name is Alex Wu. I like to make games and websites, as well as participate in hackathons! Let's play tic tac toe:</p> 
            <TicTacToe />
            <p>Visit some of the other pages, or reach out to me in <a href='contact'>/contact</a>!</p> 
            <BackToHome />
        </div>
    );
}