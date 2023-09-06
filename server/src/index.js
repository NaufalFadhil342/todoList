import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'This server was built by express' });
});

app.listen('3002', () => {
  console.log('server running on port 3002');
});
