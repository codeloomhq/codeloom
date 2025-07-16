import postgres from 'postgres'

const connectionString = process.env.SUPABASE_DB_URL; 
if (!connectionString) {
  throw new Error('Missing SUPABASE_DB_URL in environment variables');
}

// Initialize postgres client with the connection string
const sql = postgres(connectionString);

export default sql;