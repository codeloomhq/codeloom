import express from 'express';
import cors from 'cors';
import sql from './utils/db';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (_req, res) => {
  res.send('🚀 CodeLoom backend is working!');
});
// 🚀 Health check route to verify DB connection
app.get('/db', async (_req, res) => {
  try {
    const result = await sql`SELECT NOW()`;
    res.json({
      status: 'Healthy',
      dbTime: result[0].now,
    });
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ status: 'Unhealthy', error: 'Database connection failed' });
  }
});


export default app;