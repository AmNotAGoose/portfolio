import './Profile.css';
import pfp from '../assets/pfp.png'; 
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';

const Profile = () => {
    return (
        <div className='profile'> 
            <img className='profile-image' src={pfp} alt="Profile" /> 
            <div>
                <h1>Alex Wu</h1>
                <Typography variant="h5">
                    Hi! I'm Alex Wu, a passionate web developer!
                </Typography>
                <div className="profile-socials">
                    <a href="https://github.com/AmNotAGoose" target="_blank" rel="noopener noreferrer">
                        <GithubIcon />
                    </a> 
                    <a href='mailto:alexyihengwu@gmail.com' target="_blank" rel="noopener noreferrer">
                        <EmailIcon />
                    </a>
                </div>
            </div> 
        </div>
    );
};

export default Profile;
