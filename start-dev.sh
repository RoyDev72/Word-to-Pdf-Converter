#!/bin/bash

# Word to PDF Converter - Development Setup Script
# This script starts both frontend and backend servers

echo "🚀 Starting Word to PDF Converter..."
echo "================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p Backend/uploads Backend/files

# Install dependencies if node_modules don't exist
if [ ! -d "Backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd Backend && npm install && cd ..
fi

if [ ! -d "Frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd Frontend && npm install && cd ..
fi

echo "✅ Dependencies installed successfully!"
echo ""
echo "🔧 Starting servers..."
echo "Backend will run on: http://localhost:3000"
echo "Frontend will run on: http://localhost:5173"
echo ""
echo "To stop the servers, press Ctrl+C"
echo ""

# Start backend in background
echo "🔙 Starting backend server..."
cd Backend
npm start &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 3

# Start frontend
echo "🎨 Starting frontend server..."
cd Frontend
npm run dev &
FRONTEND_PID=$!
cd ..

# Function to handle script termination
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "✅ Servers stopped successfully!"
    exit 0
}

# Set up trap to handle Ctrl+C
trap cleanup SIGINT SIGTERM

# Wait for background processes
wait