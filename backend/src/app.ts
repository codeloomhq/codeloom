import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (_req, res) => {
  res.send('🚀 CodeLoom backend is working!');
});

export default app;