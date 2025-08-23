import './FooterBar.css';
import { Box, Typography } from '@mui/material';

export function FooterBar() {
    return (
        <Box component="footer" className="footer">
            <Typography variant="body1" className="footer-text">
                Alex Wu
            </Typography>
        </Box>
    )
}
