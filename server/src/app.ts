import express, { Request, Response } from 'express';

import { Equipment } from './model/Equipment';
import { container } from './inversify';
import multer from 'multer';
import csv from 'csv-parser';
import fs from 'fs';
import { Period, PeriodType } from './model/Period';


const app = express();
const upload = multer({ dest: 'uploads/' });
const port = 8080;

app.use(express.json());

app.use((req, res, next) => {
    // Permitir acesso a partir de qualquer origem
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Permitir os métodos HTTP que serão utilizados
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // Permitir os cabeçalhos personalizados que serão enviados na requisição
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // Permitir o uso de credenciais (cookies, tokens, etc)
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();
});

app.get('/equipments', async (req: Request, res: Response) => {
    let { period } = req.query
    if (typeof period === 'string' && period.toUpperCase() in Period) {
        period = period.toUpperCase()
        const equipmentService = container.getEquipmentService()
        const resp = await (await equipmentService).findEquipmentsByPeriod(period as PeriodType)
        return res.status(200).json(resp);
    }
    return res.status(400).send('Invalid period parameter.');
});

app.post('/equipments', async (req: Request, res: Response) => {
    const { equipmentId, timestamp, value } = req.body;
    if (!equipmentId) {
        return res.status(400).send('equipmentId is a required attribute in the body.');
    }

    if (!timestamp) {
        return res.status(400).send('timestamp is a required attribute in the body.');
    }

    if (!value) {
        return res.status(400).send('value is a required attribute in the body.');
    }

    const equipment: Equipment = {
        equipmentId,
        timestamp: new Date(timestamp),
        value
    }
    const equipmentService = container.getEquipmentService()
    const resp = await (await equipmentService).create(equipment)
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.status(201)
    res.status(201).json(resp)
});

app.post('/equipments/csv', upload.single('csvFile'), async (req: any, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded." })
    }

    if (!req.file.mimetype.includes('csv')) {
        return res.status(400).json({ error: "The file uploaded is not a CSV." })
    }

    const results: Equipment[] = []

    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (data: Equipment) => {
            data.timestamp = new Date(data.timestamp)
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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});