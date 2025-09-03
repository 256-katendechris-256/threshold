#!/bin/bash

# Deployment script for Threshold App
# Usage: ./scripts/deploy.sh [staging|production]

set -e

ENVIRONMENT=${1:-staging}
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

echo "🚀 Starting deployment to $ENVIRONMENT environment..."
echo "📅 Timestamp: $TIMESTAMP"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Validate environment
if [[ "$ENVIRONMENT" != "staging" && "$ENVIRONMENT" != "production" ]]; then
    print_error "Invalid environment. Use 'staging' or 'production'"
    exit 1
fi

# Check if required tools are installed
check_dependencies() {
    echo "🔍 Checking dependencies..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed"
        exit 1
    fi
    
    if ! command -v vercel &> /dev/null && ! npx vercel --version &> /dev/null; then
        print_warning "Vercel CLI not found. Installing locally..."
        npm install vercel --save-dev
        print_status "Vercel CLI installed locally. Using 'npx vercel' commands."
    fi
    
    print_status "Dependencies check completed"
}

# Run pre-deployment checks
pre_deployment_checks() {
    echo "🔍 Running pre-deployment checks..."
    
    # Check if we're in a git repository
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        print_error "Not in a git repository"
        exit 1
    fi
    
    # Check for uncommitted changes
    if [[ -n $(git status --porcelain) ]]; then
        print_warning "You have uncommitted changes. Consider committing them first."
        read -p "Do you want to continue? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
    
    # Check current branch
    CURRENT_BRANCH=$(git branch --show-current)
    if [[ "$ENVIRONMENT" == "production" && "$CURRENT_BRANCH" != "main" ]]; then
        print_warning "You're not on the main branch. Production should be deployed from main."
        read -p "Do you want to continue? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
    
    print_status "Pre-deployment checks completed"
}

# Install dependencies
install_dependencies() {
    echo "📦 Installing dependencies..."
    npm ci
    print_status "Dependencies installed"
}

# Run linting and type checking
run_quality_checks() {
    echo "🔍 Running quality checks..."
    
    echo "  📝 Running ESLint..."
    npm run lint
    
    echo "  🔍 Running TypeScript checks..."
    npx tsc --noEmit
    
    print_status "Quality checks passed"
}

# Build the application
build_application() {
    echo "🏗️  Building application..."
    npm run build
    print_status "Application built successfully"
}

# Deploy to Vercel
deploy_to_vercel() {
    echo "🚀 Deploying to Vercel ($ENVIRONMENT)..."
    
    if [[ "$ENVIRONMENT" == "production" ]]; then
        npx vercel --prod --yes
    else
        npx vercel --yes
    fi
    
    print_status "Deployment completed successfully"
}

# Main deployment flow
main() {
    echo "🎯 Threshold App Deployment Script"
    echo "=================================="
    
    check_dependencies
    pre_deployment_checks
    install_dependencies
    run_quality_checks
    build_application
    deploy_to_vercel
    
    echo ""
    echo "🎉 Deployment to $ENVIRONMENT completed successfully!"
    echo "⏰ Completed at: $(date)"
    
    if [[ "$ENVIRONMENT" == "staging" ]]; then
        echo "🔗 Staging URL: https://staging-threshold.vercel.app"
    else
        echo "🔗 Production URL: https://threshold.vercel.app"
    fi
}

# Run the main function
main
