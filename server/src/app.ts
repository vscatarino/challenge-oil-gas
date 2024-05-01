// Import the 'express' module
import express, { Request } from 'express';

import { Equipment } from './model/Equipment';
import { container } from './inversify';

// Create an Express application
const app = express();

// Set the port number for the server
const port = 8080;

app.use(express.json());

// Define a route for the root path ('/')
app.get('/', (req, res) => {
    // Send a response to the client
    res.send('Hello, TypeScript + Node.js + Express!');
});

app.get('/equipments', (req, res) => {
    //deve devolver os equipments, de acordo com os filtros
    res.send('Hello, TypeScript + Node.js + Express!');
});

app.post('/equipments', async (req: Request, res) => {
    // deve salvar os equipments no banco 
    const { equipmentId, timestamp, value } = req.body;
    const equipment: Equipment = {
        equipmentId,
        timestamp,
        value
    }
    console.log("EQUIPMENT: ", equipment)
    const equipmentService = container.getEquipmentService()
    equipmentService.create(equipment)
    res.send({ ok: true })
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});