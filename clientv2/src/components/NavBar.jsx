import './NavBar.css';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';

import { useNavigate } from "react-router";

export function NavBar() { // this is the "socials" component mentioned in the point breakdown, its refered to as NavBar since it also handles navigation :D
    const navigate = useNavigate();

    return (
        <nav>
            <div className="nav-links">
                <button onClick={() => {navigate("/")}}>Home</button>
                <button onClick={() => {navigate("/about")}}>About</button>
                <button onClick={() => {navigate("/projects")}}>Projects</button>
                <button onClick={() => {navigate("/contact")}}>Contact</button>
            </div>
            
            <div className="nav-icons">
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