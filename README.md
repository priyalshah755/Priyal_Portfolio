<<<<<<< HEAD
# Priyal Shah — Full-stack Portfolio

A responsive dark-green portfolio built with **Node.js, Express, EJS, CSS and MongoDB**.

## Features

- Responsive dark-green layout for desktop and mobile
- About, education, skills, projects, internship and certification sections
- Projects rendered dynamically from data in `server.js`
- Contact form with server-side validation
- Contact messages stored in MongoDB
- `/health` endpoint to check server/database status

## Requirements

Install:
1. Node.js (LTS) from https://nodejs.org/
2. MongoDB Community Server locally, or create a free cluster at https://www.mongodb.com/atlas

## Run locally

1. Extract the ZIP file.
2. Open the extracted `priyal_portfolio` folder in VS Code.
3. Open a terminal in that folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Create a `.env` file by copying `.env.example`.
   - Windows PowerShell: `Copy-Item .env.example .env`
   - macOS/Linux: `cp .env.example .env`

6. Make sure MongoDB is running locally, or replace `MONGODB_URI` in `.env` with your MongoDB Atlas connection string. For Atlas, allow your IP address in Network Access and use a database user. Keep `.env` private; do not upload it to GitHub.

7. Start the website:

   ```bash
   npm run dev
   ```

   Or use `npm start`.

8. Open **http://localhost:3000** in your browser.

To check the server, visit `http://localhost:3000/health`. It reports whether MongoDB is connected.

## Personalize it

- **Email:** Replace `priyal@example.com` in `views/index.ejs` with your real contact email.
- **Project links:** Replace the placeholder `https://github.com/` URLs in the `projects` array in `server.js` with each project's actual repository/demo URL.
- **Project descriptions:** Edit the same array in `server.js`.
- **Internship and certification:** Review the wording in `views/index.ejs` and adjust it to match your actual work and certificate.
- **Resume:** Add your PDF to `public/files/` and create a download link if you want a resume button.

## Folder structure

```text
priyal_portfolio/
├── public/
│   ├── css/style.css
│   └── js/main.js
├── views/
│   └── index.ejs
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Important notes

- The homepage works even if MongoDB is not connected, but the contact form will not save messages until the database is connected.
- This starter project intentionally has no admin dashboard or authentication. Add secure authentication and authorization before adding private admin features.
- The GitHub links and contact email are placeholders; update them before publishing.
=======
# Priyal_Portfolio
>>>>>>> 1137ea4515bff50d0140785c3528abcf668128b5
