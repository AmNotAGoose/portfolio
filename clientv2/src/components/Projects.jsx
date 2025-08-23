import './Pages.css';
import BackToHome from './BackToHome';

export default function Projects() {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <p>itch.io: <a href='https://amnotagoose.itch.io/' target="_blank" rel="noopener noreferrer">AmNotAGoose</a></p>
            <p>GitHub: <a href='https://github.com/AmNotAGoose' target="_blank" rel="noopener noreferrer">AmNotAGoose</a></p>
            
            <h2>Game Jam Projects</h2>
            
            <div className='game-item'>
                <h3>The Winter Curse</h3>
                <p>3D movement shooter</p>
            </div>

            <div className='game-item'>
                <h3>Catch of the Day</h3>
                <p>Simple fishing game with rogue-like elements and enemies!</p>
            </div>

            <div className='game-item'>
                <h3>Boo-red!</h3>
                <p>Haloween clicker game</p>
            </div>
            
            <BackToHome />
        </div>
    );
}