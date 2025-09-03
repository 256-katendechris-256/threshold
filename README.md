# 🎯 Threshold

A modern Next.js application with Firebase integration, built with TypeScript, Tailwind CSS, and Shadcn/ui components.

## 🚀 Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd threshold

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Firebase configuration

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Backend:** Firebase (Auth, Firestore, Storage)
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions

## 📁 Project Structure

```
threshold/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (pages)/           # Route groups
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── impact/            # Impact page
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── layout/            # Layout components
│   │   ├── sections/          # Page sections
│   │   └── ui/                # Shadcn/ui components
│   └── lib/                   # Utilities and configurations
│       ├── firebase/          # Firebase configuration
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
├── scripts/                   # Deployment scripts
├── .github/workflows/         # GitHub Actions CI/CD
└── docs/                      # Documentation
```

## 🔥 Features

- ✅ **Modern UI/UX** - Built with Shadcn/ui and Tailwind CSS
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Firebase Integration** - Authentication, database, and storage
- ✅ **TypeScript** - Full type safety
- ✅ **Dark/Light Mode** - Theme switching support
- ✅ **SEO Optimized** - Next.js 15 with App Router
- ✅ **CI/CD Pipeline** - Automated testing and deployment
- ✅ **Performance Optimized** - Next.js optimizations and best practices

## 🚀 Deployment

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/threshold)

### Manual Deployment

1. **Set up environment variables** (see [DEPLOYMENT.md](./DEPLOYMENT.md))
2. **Deploy to staging:**
   ```bash
   ./scripts/deploy.sh staging
   ```
3. **Deploy to production:**
   ```bash
   ./scripts/deploy.sh production
   ```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
./scripts/setup-environments.sh    # Set up environment variables
./scripts/deploy.sh staging       # Deploy to staging
./scripts/deploy.sh production    # Deploy to production
```

## 🌍 Environment Variables

Create a `.env.local` file with your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

See `.env.example` for a complete list of environment variables.

## 🔧 Development

### Prerequisites

- Node.js 20+ 
- npm or yarn
- Git

### Local Development

```bash
# Install dependencies
npm install

# Set up environment
./scripts/setup-environments.sh

# Start development server
npm run dev
```

### Code Quality

This project uses:
- **ESLint** for code linting
- **TypeScript** for type checking
- **Prettier** for code formatting
- **Pre-commit hooks** for code quality enforcement

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit

# Format code
npx prettier --write .
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write descriptive commit messages
- Add tests for new features
- Update documentation as needed

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT.md) - Complete deployment setup
- [API Documentation](./docs/api.md) - API endpoints and usage
- [Component Guide](./docs/components.md) - Component library documentation

## 🐛 Issues & Support

If you encounter any issues:

1. Check the [troubleshooting guide](./DEPLOYMENT.md#troubleshooting)
2. Search existing [GitHub issues](https://github.com/your-username/threshold/issues)
3. Create a new issue with detailed information

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Firebase](https://firebase.google.com/) - Backend services
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- [Vercel](https://vercel.com/) - Deployment platform

---

**Built with ❤️ by the Threshold team**

## 🚀 CI/CD Pipeline Status
- ✅ **Development Environment:** Local development setup complete
- ✅ **Staging Environment:** Automatic deployment from `develop` branch  
- ✅ **Production Environment:** Automatic deployment from `main` branch
- 🔄 **Next Step:** Add GitHub secrets to complete automation

**Live Production URL:** https://threshold-4gezjdo9q-bse01s-projects.vercel.app

