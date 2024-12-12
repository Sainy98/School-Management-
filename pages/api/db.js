import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: "sql12.freesqldatabase.com",  // Your MySQL host
  user: "sql12751380",                // Your MySQL username
  password: "kisG6PUD8Z",             // Your MySQL password
  database: "sql12751380",            // Your database name
});

export default pool; // Directly export the pool
