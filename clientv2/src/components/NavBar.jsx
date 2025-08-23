import './NavBar.css';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub'; 
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useNavigate } from "react-router";

export function NavBar({ theme, toggleTheme }) {
    const navigate = useNavigate();

    return (
        <nav>
            <div className="nav-links">
                <button onClick={() => {navigate("/")}}>Home</button>
                <button onClick={() => {navigate("/about")}}>About</button>
                <button onClick={() => {navigate("/projects")}}>Projects</button>
                <button onClick={() => {navigate("/contact")}}>Contact</button>
                <button onClick={() => {navigate("/awards")}}>Awards</button>
            </div>
            
            <div className="nav-icons">
                <a onClick={toggleTheme}>
                    {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                </a>
                <a href="https://github.com/AmNotAGoose" target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                </a> 
                <a href='mailto:alexyihengwu@gmail.com' target="_blank" rel="noopener noreferrer">
                    <EmailIcon />
                </a>
            </div>
        </nav>
    )
}