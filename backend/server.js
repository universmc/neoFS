const express = require('express');
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Définir les routes ici

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
