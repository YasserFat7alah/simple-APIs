import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { config } from 'dotenv';

config({ path: '.env' });

const db_url = process.env.DATABASE_URL;

if(!db_url) throw new Error('DATABASE_URL is not defined.')

//INIT NEON CLIENT
const sql = neon(db_url);

// INIT DRIZZLE
export const db = drizzle(sql);