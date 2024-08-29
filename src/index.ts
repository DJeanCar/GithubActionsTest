import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({ foo: 'bar' });
});

app.get('/test', (req: Request, res: Response) => {
  res.json({ foo: 'test' });
});

app.get('/jean', (req: Request, res: Response) => {
  res.json({ foo: 'jean' });
});

app.listen(3000, () => {
  console.log('>>listen port 3000');
});
