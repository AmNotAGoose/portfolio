import './Awards.css';
import BackToHome from './BackToHome';
import Typography from '@mui/material/Typography';

export default function Awards() {
    return (
        <div className='contact'>
            <h1>Awards</h1>
            <Typography variant="body1">
                PTC Hacks 3.0 - 1st place
            </Typography>
            <Typography variant="body1">
                Hack49 - 1st place Waste Management Track
            </Typography>
            <BackToHome />
        </div>
    );
}