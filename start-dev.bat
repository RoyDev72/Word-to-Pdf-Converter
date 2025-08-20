@echo off
title Word to PDF Converter - Development Setup

echo 🚀 Starting Word to PDF Converter...
echo =================================

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo 📁 Creating necessary directories...
if not exist "Backend\uploads" mkdir Backend\uploads
if not exist "Backend\files" mkdir Backend\files

REM Install dependencies if node_modules don't exist
if not exist "Backend\node_modules" (
    echo 📦 Installing backend dependencies...
    cd Backend
    call npm install
    cd ..
)

if not exist "Frontend\node_modules" (
    echo 📦 Installing frontend dependencies...
    cd Frontend
    call npm install
    cd ..
)

echo ✅ Dependencies installed successfully!
echo.
echo 🔧 Starting servers...
echo Backend will run on: http://localhost:3000
echo Frontend will run on: http://localhost:5173
echo.
echo To stop the servers, press Ctrl+C in each window
echo.

echo 🔙 Starting backend server...
start "Backend Server" cmd /k "cd Backend && npm start"

timeout /t 3 /nobreak >nul

echo 🎨 Starting frontend server...
start "Frontend Server" cmd /k "cd Frontend && npm run dev"

echo ✅ Both servers are starting in separate windows!
echo You can close this window now.
pause