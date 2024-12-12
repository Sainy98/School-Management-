//api/getSchools.js
import db from './db'; // Assuming you have this setup

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const query = "SELECT id, name, address, city, image FROM schools";
    
    try {
      const [results] = await db.query(query); // Use await for promise-based query
      res.status(200).json(results); // Send the results as a JSON response
    } catch (err) {
      res.status(500).json({ error: err.message }); // Handle errors
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" }); // Handle non-GET requests
  }
}
