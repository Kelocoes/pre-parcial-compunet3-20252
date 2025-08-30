import express, { Express, Request, Response } from 'express';

import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import { db } from './config';
import { boardRouter, threadRouter } from './routes';

const app: Express = express();

app.use(cors());


const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/boards", boardRouter.router);
app.use("/api/threads", threadRouter.router);

app.get("/", (req: Request, res: Response) => {
    res.send('Hola Mundo');
});


db.then(() =>
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
);