@echo off
echo 🚀 Setting up Portfolio Backend...

REM Check if Node is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install it first.
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Copy environment file
if not exist .env (
    echo 📝 Creating .env file...
    copy .env.example .env
    echo ⚠️  Please edit .env with your configuration
)

echo ✅ Setup complete!
echo.
echo 📝 Next steps:
echo 1. Edit .env file with your MongoDB URI and email settings
echo 2. Run: npm run dev
echo.
echo 🌐 Backend will run at: http://localhost:5000
echo 🔌 API endpoints available at: http://localhost:5000/api
