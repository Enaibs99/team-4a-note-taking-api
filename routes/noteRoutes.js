const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Root Route
router.get('/', noteController.getWelcomeMessage);

// Note CRUD Routes
router.post('/notes', noteController.createNote);
router.get('/notes', noteController.getAllNotes);
router.get('/notes/:id', noteController.getNoteById);
router.put('/notes/:id', noteController.updateNote);
router.patch('/notes/:id', noteController.patchNote);
router.delete('/notes/:id', noteController.deleteNote);

module.exports = router;