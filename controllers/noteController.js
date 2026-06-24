const { v4: uuidv4 } = require('uuid');

// In-memory data store
let notes = [];

// Welcome/Root logic
exports.getWelcomeMessage = (req, res) => {
    res.status(200).json({
        message: "Welcome to the Note-Taking API!",
        endpoints: {
            getAllNotes: "GET /notes",
            getSingleNote: "GET /notes/:id",
            createNote: "POST /notes",
            updateNote: "PUT /notes/:id",
            deleteNote: "DELETE /notes/:id"
        }
    });
};

// CREATE a new note
exports.createNote = (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }

    const newNote = {
        id: uuidv4(),
        title,
        content,
        createdAt: new Date().toISOString()
    };

    notes.push(newNote);
    res.status(201).json(newNote);
};

// RETRIEVE all notes
exports.getAllNotes = (req, res) => {
    res.status(200).json(notes);
};

// RETRIEVE a single note
exports.getNoteById = (req, res) => {
    const note = notes.find(n => n.id === req.params.id);
    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
};

// UPDATE a note
exports.updateNote = (req, res) => {
    const note = notes.find(n => n.id === req.params.id);
    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }

    const { title, content } = req.body;
    if (title) note.title = title;
    if (content) note.content = content;

    res.status(200).json(note);
};

// DELETE a note
exports.deleteNote = (req, res) => {
    const noteIndex = notes.findIndex(n => n.id === req.params.id);
    if (noteIndex === -1) {
        return res.status(404).json({ error: 'Note not found' });
    }

    notes.splice(noteIndex, 1);
    res.status(204).send();
};