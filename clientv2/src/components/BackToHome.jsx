import './Contact.css';
import { useNavigate } from "react-router";

export default function BackToHome() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate('/')}>
            Return to home
        </button>
    );
}