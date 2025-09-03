#!/bin/bash

# Environment Setup Script for Threshold App
# This script helps you set up environment variables for different environments

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_header() {
    echo -e "${BLUE}=================================${NC}"
    echo -e "${BLUE} Threshold Environment Setup${NC}"
    echo -e "${BLUE}=================================${NC}"
    echo ""
}

print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if .env.local exists
check_env_file() {
    if [[ -f ".env.local" ]]; then
        print_warning ".env.local already exists"
        read -p "Do you want to overwrite it? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo "Keeping existing .env.local file"
            exit 0
        fi
    fi
}

# Prompt for Firebase configuration
setup_firebase_config() {
    echo ""
    print_info "Setting up Firebase configuration..."
    echo "Please provide your Firebase project details:"
    echo ""
    
    read -p "Firebase API Key: " FIREBASE_API_KEY
    read -p "Firebase Auth Domain (e.g., your-project.firebaseapp.com): " FIREBASE_AUTH_DOMAIN
    read -p "Firebase Project ID: " FIREBASE_PROJECT_ID
    read -p "Firebase Storage Bucket (e.g., your-project.appspot.com): " FIREBASE_STORAGE_BUCKET
    read -p "Firebase Messaging Sender ID: " FIREBASE_MESSAGING_SENDER_ID
    read -p "Firebase App ID: " FIREBASE_APP_ID
    
    # Create .env.local file
    cat > .env.local << EOF
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=$FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=$FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=$FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=$FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=$FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=$FIREBASE_APP_ID
EOF
    
    print_status ".env.local file created successfully"
}

# Setup Vercel project
setup_vercel_project() {
    echo ""
    print_info "Setting up Vercel project..."
    
    if ! command -v vercel &> /dev/null && ! npx vercel --version &> /dev/null; then
        print_warning "Vercel CLI not found. Installing locally..."
        npm install vercel --save-dev
        print_status "Vercel CLI installed locally. Using 'npx vercel' commands."
    fi
    
    echo "Initializing Vercel project..."
    npx vercel link
    
    print_status "Vercel project setup completed"
}

# Add environment variables to Vercel
setup_vercel_env() {
    echo ""
    print_info "Adding environment variables to Vercel..."
    echo "This will add your Firebase configuration to your Vercel project"
    
    read -p "Do you want to add environment variables to Vercel? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        # Read from .env.local and add to Vercel
        while IFS= read -r line; do
            if [[ $line == NEXT_PUBLIC_* ]]; then
                var_name=$(echo $line | cut -d'=' -f1)
                var_value=$(echo $line | cut -d'=' -f2-)
                
                echo "Adding $var_name to Vercel..."
                npx vercel env add $var_name production <<< "$var_value"
                npx vercel env add $var_name preview <<< "$var_value"
                npx vercel env add $var_name development <<< "$var_value"
            fi
        done < .env.local
        
        print_status "Environment variables added to Vercel"
    fi
}

# Setup Git hooks (optional)
setup_git_hooks() {
    echo ""
    print_info "Setting up Git hooks..."
    
    read -p "Do you want to set up pre-commit hooks for code quality? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        mkdir -p .git/hooks
        
        cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
echo "Running pre-commit checks..."

# Run linting
npm run lint
if [ $? -ne 0 ]; then
    echo "Linting failed. Please fix the errors before committing."
    exit 1
fi

# Run type checking
npx tsc --noEmit
if [ $? -ne 0 ]; then
    echo "Type checking failed. Please fix the errors before committing."
    exit 1
fi

echo "Pre-commit checks passed!"
EOF
        
        chmod +x .git/hooks/pre-commit
        print_status "Git pre-commit hook setup completed"
    fi
}

# Main setup flow
main() {
    print_header
    
    check_env_file
    setup_firebase_config
    setup_vercel_project
    setup_vercel_env
    setup_git_hooks
    
    echo ""
    echo "🎉 Environment setup completed successfully!"
    echo ""
    print_info "Next steps:"
    echo "1. Push your code to GitHub/GitLab"
    echo "2. Set up GitHub Actions/GitLab CI secrets"
    echo "3. Run your first deployment with: ./scripts/deploy.sh staging"
    echo ""
    print_warning "Remember to:"
    echo "- Never commit .env.local to version control"
    echo "- Set up separate Firebase projects for staging and production"
    echo "- Configure your CI/CD secrets in GitHub/GitLab"
}

# Run the main function
main
