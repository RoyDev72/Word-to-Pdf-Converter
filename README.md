
# 📄 Word to PDF Converter

<div align="center">

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com/)

**A modern, fast, and intuitive web application for converting Microsoft Word documents to PDF format**

[🚀 Live Demo](#) • [📖 Documentation](#-api-documentation) • [🐛 Report Bug](https://github.com/RoyDev72/Word-to-Pdf-Converter/issues) • [✨ Request Feature](https://github.com/RoyDev72/Word-to-Pdf-Converter/issues)

</div>

---

## 🌟 About the Project

The Word to PDF Converter is a full-stack web application designed to provide a seamless document conversion experience. Built with modern technologies, it offers a clean interface for users to upload Word documents and convert them to PDF format instantly.

### ✨ Key Features

- 🚀 **Lightning Fast** - Instant conversion with minimal processing time
- 📱 **Responsive Design** - Works flawlessly on desktop, tablet, and mobile
- 🎨 **Modern UI/UX** - Clean, intuitive interface built with Tailwind CSS
- 🔒 **Secure** - Files are processed securely and not stored permanently
- 📊 **Real-time Feedback** - Loading states and progress indicators
- ⚡ **High Performance** - Optimized with Vite for fast development and builds
- 🔄 **Reliable Conversion** - Uses proven libraries for accurate document processing

---

## 🛠️ Technology Stack

<table>
<tr>
<td align="center"><strong>Frontend</strong></td>
<td align="center"><strong>Backend</strong></td>
<td align="center"><strong>Tools & Libraries</strong></td>
</tr>
<tr>
<td align="center">

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=for-the-badge)

![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)

![Tailwind](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white&style=for-the-badge)

</td>
<td align="center">

![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)

![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=for-the-badge)

![Multer](https://img.shields.io/badge/-Multer-FF6B6B?style=for-the-badge)

</td>
<td align="center">

![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white&style=for-the-badge)

![PostCSS](https://img.shields.io/badge/-PostCSS-DD3A0A?logo=postcss&logoColor=white&style=for-the-badge)

![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios&logoColor=white&style=for-the-badge)

</td>
</tr>
</table>

---

## 🚀 Quick Start

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **LibreOffice** (for document conversion) - [Download here](https://www.libreoffice.org/download/download/)

### 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/RoyDev72/Word-to-Pdf-Converter.git
   cd Word-to-Pdf-Converter
   ```

2. **Setup Backend**
   ```bash
   cd Backend
   npm install
   
   # Create environment file (optional)
   cp .env.example .env
   ```

3. **Setup Frontend**
   ```bash
   cd ../Frontend
   npm install
   ```

### 🏃‍♂️ Running the Application

1. **Start the Backend Server**
   ```bash
   cd Backend
   npm start
   # Server will run on http://localhost:3000
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd Frontend
   npm run dev
   # Application will open at http://localhost:5173
   ```

3. **Open your browser and navigate to** `http://localhost:5173`

---

## 📁 Project Architecture

```
Word-to-Pdf-Converter/
├── 📁 Backend/                    # Express.js API Server
│   ├── 📄 index.js               # Main server file
│   ├── 📄 package.json           # Backend dependencies
│   ├── 📁 uploads/               # Temporary file storage
│   └── 📁 files/                 # Converted file output
│
├── 📁 Frontend/                   # React Application
│   ├── 📁 src/
│   │   ├── 📁 components/        # React components
│   │   │   ├── 📄 Home.jsx       # Main conversion interface
│   │   │   ├── 📄 Navbar.jsx     # Navigation component
│   │   │   └── 📄 Footer.jsx     # Footer component
│   │   ├── 📄 App.jsx            # Root component
│   │   └── 📄 main.jsx           # Application entry point
│   ├── 📁 public/                # Static assets
│   ├── 📄 package.json           # Frontend dependencies
│   ├── 📄 vite.config.js         # Vite configuration
│   └── 📄 tailwind.config.js     # Tailwind CSS config
│
├── 📄 README.md                   # Project documentation
└── 📄 .gitignore                  # Git ignore rules
```

---

## 🔌 API Documentation

### Endpoints

#### POST `/convertfile`

Converts a Word document to PDF format.

**Request:**
- **Method:** `POST`
- **Content-Type:** `multipart/form-data`
- **Body:** Form data with `file` field containing the .docx file

**Response:**
- **Success (200):** Returns PDF file as download
- **Error (400):** `{"message": "No file uploaded"}`
- **Error (500):** `{"message": "Error converting docx to pdf"}` or `{"message": "Internal server error"}`

**Example using curl:**
```bash
curl -X POST \
  http://localhost:3000/convertfile \
  -F 'file=@document.docx' \
  --output converted.pdf
```

---

## 🎨 Screenshots

<div align="center">
<img src="https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=Word+to+PDF+Converter+Interface" alt="Application Interface" width="80%">
</div>

---

## 🚀 Deployment

### Vercel (Frontend)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

### Heroku (Backend)

1. Install Heroku CLI
2. Create a new Heroku app
   ```bash
   heroku create your-app-name
   ```
3. Set environment variables
   ```bash
   heroku config:set FRONTEND_URL=https://your-frontend-url.vercel.app
   ```
4. Deploy
   ```bash
   git push heroku main
   ```

---

## 🐛 Troubleshooting

<details>
<summary>Common Issues and Solutions</summary>

### Backend Issues

**❌ `ERR_CONNECTION_REFUSED`**
- ✅ Ensure backend server is running on port 3000
- ✅ Check if another process is using port 3000
- ✅ Try restarting the backend server

**❌ `Error converting docx to pdf`**
- ✅ Ensure LibreOffice is installed and added to PATH
- ✅ Check file permissions in uploads and files directories
- ✅ Verify the uploaded file is a valid .docx document

### Frontend Issues

**❌ CORS errors**
- ✅ Ensure backend CORS configuration matches frontend URL
- ✅ Check if both frontend and backend are running
- ✅ Verify FRONTEND_URL environment variable in backend

**❌ File upload fails**
- ✅ Check file size (ensure it's within reasonable limits)
- ✅ Verify file format is .docx
- ✅ Check network connectivity

</details>

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 👨‍💻 About the Developer

<div align="center">

### Shivam Roy

**Full Stack Developer | React Enthusiast | Node.js Expert**

[![GitHub](https://img.shields.io/badge/GitHub-RoyDev72-181717?logo=github)](https://github.com/RoyDev72)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?logo=linkedin)](https://linkedin.com/in/shivamroy)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF5722?logo=google-chrome)](https://yourportfolio.com)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?logo=gmail)](mailto:your.email@example.com)

</div>

---

## 📈 Project Stats

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/RoyDev72/Word-to-Pdf-Converter)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/RoyDev72/Word-to-Pdf-Converter)
![GitHub last commit](https://img.shields.io/github/last-commit/RoyDev72/Word-to-Pdf-Converter)
![GitHub issues](https://img.shields.io/github/issues/RoyDev72/Word-to-Pdf-Converter)
![GitHub pull requests](https://img.shields.io/github/issues-pr/RoyDev72/Word-to-Pdf-Converter)

</div>

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Node.js](https://nodejs.org/) - Runtime environment
- [Express](https://expressjs.com/) - Web framework for Node.js
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [LibreOffice](https://www.libreoffice.org/) - Document conversion engine
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Shivam Roy](https://github.com/RoyDev72)

</div>
