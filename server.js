require('dotenv').config();
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory data store
let notes = [];

// --- CRUD ROUTES ---

// 1. CREATE a new note
app.post('/notes', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: 'Title And Content Are Required' });
    }

    const newNote = {
        id: uuidv4(),
        title,
        content,
        createdAt: new Date().toISOString()
    };

    notes.push(newNote);

    res.status(201).json(newNote);
});

// 2. RETRIEVE all notes
app.get('/notes', (req, res) => {
    res.status(200).json(notes);
});

// 3. RETRIEVE a single note by ID
app.get('/notes/:id', (req, res) => {
    const note = notes.find(n => n.id === req.params.id);
    
    if (!note) {
        return res.status(404).json({ error: 'Note Not Found' });
    }
    
    res.status(200).json(note);
});

// 4. UPDATE an existing note
app.put('/notes/:id', (req, res) => {
    const note = notes.find(n => n.id === req.params.id);
    
    if (!note) {
        return res.status(404).json({ error: 'Note Not Found' });
    }

    const { title, content } = req.body;
    if (title) note.title = title;
    if (content) note.content = content;

    res.status(200).json(note);
});

// 5. DELETE a note
app.delete('/notes/:id', (req, res) => {
    const noteIndex = notes.findIndex(n => n.id === req.params.id);
    
    if (noteIndex === -1) {
        return res.status(404).json({ error: 'Note Not Found' });
    }

    notes.splice(noteIndex, 1);
    res.status(204).send(); // 204 No Content Means Success
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});