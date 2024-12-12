//api/addSchool.js
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import db from './db';

// Set up storage for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = './public/schoolImages';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Disabling bodyParser to handle file uploads manually
  },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    upload.single('image')(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: 'Image upload failed', details: err.message });
      }

      const { name, address, city, state, contact, email_id } = req.body;
      const image = req.file ? req.file.filename : '';

      try {
        await db.query(
          'INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [name, address, city, state, contact, email_id, image]
        );
        res.status(201).json({ message: 'School added successfully' });
      } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ error: 'Failed to add school', details: error.message });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
