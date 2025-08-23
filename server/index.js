const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const messagesDir = path.join(__dirname, 'messages');

app.post('/send-message', (req, res) => {
    try {
        const { message } = req.body;

        const uuid = uuidv4();
        const filename = `message-${uuid}.txt`;
        const filepath = path.join(messagesDir, filename);

        fs.writeFileSync(filepath, message, 'utf8');

        console.log(`Message got! Saved to: ${filepath}`);

        res.json({ 
            success: true,
            filename: filename
        });

    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to save message' 
        });
    }
});

app.get('/', (req, res) => {
    res.json({ 
        message: 'Hello world!',
    });
});

app.listen(3001, () => {
    console.log(`Server running`);
});
