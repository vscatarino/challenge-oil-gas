// Import the 'express' module
import express, { Request, Response } from 'express';

import { Equipment } from './model/Equipment';
import { container } from './inversify';
import multer from 'multer';
import csv from 'csv-parser';
import fs from 'fs';


// Create an Express application
const app = express();
const upload = multer({ dest: 'uploads/' });

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
    res.status(201).json(resp)
});

app.post('/equipments', async (req: Request, res: Response) => {
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

app.post('/equipments/csv', upload.single('csvFile'), async (req: any, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ error: "Nenhum arquivo enviado." })
    }

    if (!req.file.mimetype.includes('csv')) {
        return res.status(400).json({ error: "O arquivo enviado não é um CSV." })
    }

    const results: Equipment[] = []

    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (data: Equipment) => {
            results.push(data)
        })
        .on('end', async () => {
            fs.unlinkSync(req.file.path)
            const equipmentService = container.getEquipmentService()
            const resp = await (await equipmentService).createMany(results)
            res.setHeader('Content-Type', 'application/json; charset=utf-8')
            res.status(201).json(resp)
        })
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});