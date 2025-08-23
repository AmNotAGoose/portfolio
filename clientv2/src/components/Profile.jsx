import './Profile.css';
import pfp from '../assets/pfp.png'; 

const Profile = () => {
    return (
        <div className='profile'> 
            <img className='profile-image' src={pfp} alt="Profile" /> 
            <div>
                <h1>Alex Wu</h1>
                <p>
                    Hi! I'm Alex Wu, a passionate web developer!
                </p>
            </div> 
        </div>
    );
};

export default Profile;
