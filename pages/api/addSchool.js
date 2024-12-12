import cloudinary from 'cloudinary';
import db from './db';
import multer from 'multer';

cloudinary.v2.config({
  cloud_name: "djgstrn03",
  api_key: "429649979917489",
  api_secret: "I9rQ08B5i6QQA4s2fql4RhoQz7U",
});

export const config = {
  api: { bodyParser: false }, // Disable default body parser
};

const upload = multer();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    upload.single('image')(req, res, async (err) => {
      if (err || !req.file) {
        return res.status(500).json({ error: 'Image upload failed', details: err?.message });
      }

      const { name, address, city, state, contact, email_id } = req.body;

      try {
        const result = await new Promise((resolve, reject) => {
          cloudinary.v2.uploader.upload_stream(
            { folder: 'schoolImages' },
            (error, result) => {
              if (error) return reject(new Error('Cloudinary upload failed'));
              resolve(result);
            }
          ).end(req.file.buffer);
        });

        await db.query(
          'INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [name, address, city, state, contact, email_id, result.secure_url]
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
