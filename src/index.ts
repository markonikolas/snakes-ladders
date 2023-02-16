import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => res.send('Hello Express!'))

app.get('/api', (req: Request, res: Response) => res.json({ message: 'Hello Express!' }))

app.listen(3000, () => console.log('The app is listening on port ' + 3000))