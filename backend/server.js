const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

// Configuration Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mon API',
            version: '1.0.0',
            description: 'Description de l\'API'
        },
    },
    apis: ['./routes/*.js'] // Mettez à jour le chemin selon votre structure
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routage des fichiers JSON
app.get('/json/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'json', `${filename}.json`));
});

// Autres routes et configurations...

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
