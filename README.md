# Schools Management System

Live Link: [https://schools-management.netlify.app/](https://schools-management.netlify.app/)

## Project Overview
The Schools Management System is a web application built using **Next.js**, **MySQL**, and **Cloudinary**. It allows users to:
- View a list of schools.
- Search schools by name or city.
- Add new schools with uploaded images.

## Technologies Used
- **Frontend:** Next.js (React Framework)
- **Backend:** Node.js API routes (serverless functions)
- **Database:** MySQL (for storing school data)
- **Image Storage:** Cloudinary (for uploading and managing school images)

---

## Features
### 1. View Schools
- Displays a list of schools with details such as name, address, city, and an uploaded image.
- Integrated search functionality by school name or city.

### 2. Add Schools
- Add new schools with details like name, address, city, state, contact, email, and image.
- Images are uploaded to **Cloudinary** and stored securely.

### 3. Search Functionality
- Search schools by name or city.
- Real-time search filtering.

---

## Installation & Setup
### Prerequisites:
- **Node.js** and **npm/yarn** installed.
- **MySQL Database** setup.
- **Cloudinary Account** for image storage.

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/schools-management.git
   cd schools-management
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file and add these environment variables:
   ```env
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name

   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

---

## Project Structure
```
|-- /pages
|   |-- index.js        # Home page displaying school list
|   |-- api
|       |-- getSchools.js   # Fetching schools data
|       |-- addSchool.js    # Adding new schools
|
|-- /components
|   |-- ShowSchools.js  # Component for displaying schools list
|
|-- /public
|-- /styles
|-- /utils
```

---

## API Endpoints
### GET `/api/getSchools`
- Fetches all schools from the database.

### POST `/api/addSchool`
- Adds a new school with form data and image upload to Cloudinary.

---

