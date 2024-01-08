const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

const swaggerDefinition = {
    openapi: '3.0.1',
    info: {
      title: 'univers-mc.cloud API',
      version: '1.0.0',
      description: 'The API for univers-mc.cloud',
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL de votre serveur local
        description: 'Local server',
      },
      // Ajoutez d'autres serveurs ici si nécessaire
    ],
  };
  
  const options = {
    swaggerDefinition,
    // Emplacement des fichiers qui contiennent des commentaires de documentation
    apis: ['./routes/*.js'], // Changez en fonction de votre structure de projet
  };
  
  const swaggerSpec = swaggerJSDoc(options);
  

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
