import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';

import { config } from './config/config';
import { apiRouter } from './router';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    methods: 'GET, PUT, POST',
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

// @ts-ignore
app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            message: err.message,
            data: err.data,
        });
});

const { PORT } = config;

app.listen(PORT, async () => {
    console.log(`Server has started on port:${PORT}`);

    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connected');
        }
    } catch (err) {
        if (err) console.log(err);
    }
});
