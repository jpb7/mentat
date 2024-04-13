import express, { Request, Response } from 'express';
import templates from './drillTemplates';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.json(Object.keys(templates));
});

app.get('/:drillId', (req: Request, res: Response) => {
  const { drillId } = req.params;
  const drillTemplate = templates[drillId];

  if (!drillTemplate) {
    return res.status(400).json({ error: 'Invalid drill ID' });
  }

  res.json(drillTemplate);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

