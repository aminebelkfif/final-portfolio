#!/bin/bash

echo "🚀 Setting up Portfolio Backend..."

# Check if Node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Copy environment file
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "⚠️  Please edit .env with your configuration"
fi

echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Edit .env file with your MongoDB URI and email settings"
echo "2. Run: npm run dev"
echo ""
echo "🌐 Backend will run at: http://localhost:5000"
echo "🔌 API endpoints available at: http://localhost:5000/api"
