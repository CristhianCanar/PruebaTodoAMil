import { Pool } from 'pg'

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'root',
  database: 'ecommerce',
  port: 5432
})
