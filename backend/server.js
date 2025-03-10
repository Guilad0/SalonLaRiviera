const express = require("express");
const bodyParser = require("body-parser");
const dialogflow = require("dialogflow");
const path = require("path");

// Configuración del servidor
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Ruta para manejar las peticiones del frontend
app.post("/webhook", async (req, res) => {
    // Configura las credenciales de Dialogflow
    const sessionClient = new dialogflow.SessionsClient({
        keyFilename: path.join(__dirname, 'src/newagent-mikk-572cc771a176.json')
        // Ruta al archivo JSON de la clave
    });

    const sessionPath = sessionClient.sessionPath('newagent-mikk', req.body.session); // Usa el ID de tu agente

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: req.body.query, // La consulta que el usuario hace
                languageCode: 'es', // El idioma de la consulta
            },
        },
    };

    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        res.json({ reply: result.fulfillmentText }); // Respuesta de Dialogflow
    } catch (error) {
        console.error("Error en la comunicación con Dialogflow", error);
        res.status(500).send("Error en el servidor.");
    }
});

// Levantar el servidor en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
