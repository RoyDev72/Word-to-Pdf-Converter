
# 📄 Word to PDF Converter

A simple web application that converts Microsoft Word documents (.docx) into PDF files using a React frontend (Vite + Tailwind) and Node.js backend.

---

## ✨ Features
- Upload `.docx` files
- Convert to PDF with one click
- Download converted PDF
- Modern UI using **Tailwind CSS**
- Fast performance with **Vite + React**
- Backend powered by **Node.js + Express**

---

## 🛠️ Tech Stack

**Frontend:**
- React
- Vite
- Tailwind CSS

**Backend:**
- Node.js
- Express

---

## 🚀 Getting Started

### 📦 Prerequisites
- Node.js installed
- LibreOffice installed (and added to PATH)

---

## 🔧 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/RoyDev72/Word-to-Pdf-Converter.git
cd Word-to-Pdf-Converter
```

2. **Install dependencies:**

**Frontend:**
```bash
cd Frontend
npm install
```

**Backend:**
```bash
cd ../Backend
npm install
```

---

## 🧪 Running the App

**Start Backend (Port 3000):**
```bash
cd Backend
node index.js
```

**Start Frontend (Usually on Port 5173):**
```bash
cd ../Frontend
npm run dev
```

---

## 📁 Project Structure

```
Word-to-Pdf-Converter/
│
├── Backend/              # Node.js Express server
│   └── index.js          # API logic for file conversion
│
├── Frontend/             # React + Vite + Tailwind
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
└── README.md
```

---

## ⚠️ Troubleshooting

- **ERR_CONNECTION_REFUSED**: Make sure backend is running on port `3000`

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).
