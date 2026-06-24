require('dotenv').config();
const express = require('express');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Global Middleware
app.use(express.json());

// Mount all routes to the root path
app.use('/', noteRoutes);

// Global 404 Handler for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found. Try visiting / or /notes" });
});

app.listen(PORT, () => {
    console.log(`Note-Taking API is running on port ${PORT}`);
});