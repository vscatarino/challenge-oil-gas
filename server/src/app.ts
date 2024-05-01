// Import the 'express' module
import express, { Request } from 'express';

import { Equipment } from './model/Equipment';
import { container } from './inversify';
import { STATUS_CODES } from 'http';

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
    const resp = await (await equipmentService).create(equipment)
    console.log("RESP TO USER: ", resp)
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.status(201)
    res.send(toJSON(resp))
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});

function toJSON(obj: object) {
    const json = JSON.stringify(obj, (_key, value) => {
        if (typeof value === 'bigint') {
            return value.toString()
        } else if (typeof value === 'object' && value instanceof Map) {
            return Object.fromEntries(value)
        } else if (typeof value === 'object' && value instanceof Set) {
            return [...value]
        } else {
            return value
        }
    })
    return json
}