# React Web Application Template

[![GitHub](https://img.shields.io/badge/license-MIT-green)](https://github.com/Pettor/template-web-app-react/blob/main/LICENSE)
[![Actions Main](../../actions/workflows/main.yml/badge.svg)](../../actions/workflows/main.yml)
[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://pettor.github.io/template-web-app-react/storybook/)

A modern, production-ready React web application template designed to jumpstart your next project with industry best practices, comprehensive tooling, and a robust development workflow.

## 🚀 Demo

Experience the template in action:
- **[Live Application Demo](https://pettor.github.io/template-web-app-react/app/)** - See the main application
- **[Storybook Component Library](https://pettor.github.io/template-web-app-react/storybook/)** - Explore the component documentation

## ✨ Key Features

This template provides a complete modern web development stack with everything you need to build scalable applications:

### 🏗️ **Core Technologies**
- **[React 19](https://reactjs.org/)** - Latest React with concurrent features and improved performance
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for better developer experience and fewer runtime errors
- **[Vite](https://vitejs.dev/)** - Lightning-fast development server and optimized production builds
- **[Turborepo](https://turbo.build/repo/)** - High-performance monorepo build system for scalable development

### 🎨 **Styling & UI**
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[DaisyUI](https://daisyui.com/)** - Beautiful, semantic component library built on Tailwind
- **Responsive Design** - Mobile-first approach with modern CSS Grid and Flexbox layouts

### 🧪 **Testing & Quality Assurance**
- **[Vitest](https://vitest.dev/)** - Fast unit and integration testing with hot reload
- **[Playwright](https://playwright.dev/)** - Reliable end-to-end testing across all browsers
- **[Storybook Component Testing](https://storybook.js.org/docs/writing-tests/component-testing)** - Visual component testing and documentation
- **Code Coverage Reports** - Comprehensive coverage tracking with detailed reporting

### 🔧 **Development Tools**
- **[Storybook](https://storybook.js.org/)** - Component development environment and documentation
- **[ESLint](https://eslint.org/)** - Advanced linting with React and TypeScript rules
- **[Prettier](https://prettier.io/)** - Consistent code formatting across the entire codebase
- **Hot Module Replacement** - Instant feedback during development

### 🚀 **DevOps & Deployment**
- **[GitHub Actions](https://docs.github.com/en/actions)** - Automated CI/CD pipeline with comprehensive testing
- **[GitHub Pages](https://pages.github.com/)** - Seamless deployment and hosting
- **Automated Quality Gates** - Build, lint, and test validation on every pull request
- **Branch Protection Rules** - Enforce code quality standards before merging

### 🌐 **Additional Integrations**
- **Mock API Server** - [Mocks Server](https://mocks-server.org/) integration for frontend development
- **Internationalization Ready** - Built-in i18n support with React Intl
- **Environment Configuration** - Multi-environment setup with proper variable management
- **Performance Monitoring** - Build-time performance analysis and optimization

## 🏃‍♂️ Quick Start

Get up and running in minutes:

### Prerequisites
- Node.js 22 or higher
- pnpm (recommended package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pettor/template-web-app-react.git
   cd template-web-app-react
   ```

2. **Enable corepack for package manager**
   ```bash
   corepack enable
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

Your application will be available at `http://localhost:5173` with hot reload enabled.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run unit tests
- `pnpm test:e2e` - Run end-to-end tests
- `pnpm lint` - Run ESLint
- `pnpm storybook` - Start Storybook development server
- `pnpm deploy` - Build and prepare for deployment

## ⚙️ Configuration

### GitHub Actions Setup

Enable continuous integration and deployment:

1. Navigate to repository **Settings** → **Actions**
2. Enable **"Allow all actions"**
3. Go to **Settings** → **Rules** and create a branch protection rule:
   - **Name**: Main
   - **Target**: Include default branch
   - **Required status checks**: `Lint`, `Build`, `Test Components`, `Test E2E`

### GitHub Pages Deployment

Set up automatic deployment:

1. Go to **Settings** → **Pages**
2. Select **Source**: Deploy from a branch
3. Choose **Branch**: `deploy/main`
4. Update README links to match your repository URL

## 🏗️ Project Structure

```
├── apps/
│   └── web/                 # Main React application
├── configs/                 # Shared configs
├── packages/                # Shared packages and utilities
├── .github/
│   └── workflows/          # CI/CD pipeline definitions
├── output/                 # Build artifacts
└── storybook-static/       # Storybook build output
```

## 🔗 Related Templates

Expand your development stack:

- **[.NET 8 Backend Template](https://github.com/Pettor/template-web-api-dotnet)** - Fully integrated C# backend template designed to work seamlessly with this React frontend

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and add tests
4. **Run the test suite**: `pnpm test && pnpm test:e2e`
5. **Submit a pull request** with a clear description

### Contribution Guidelines

- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all CI checks pass

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/Pettor/template-web-app-react/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Pettor/template-web-app-react/discussions)
- **Documentation**: [Storybook Documentation](https://pettor.github.io/template-web-app-react/storybook/)

---

**Ready to build something amazing?** 🚀 Star this repository if you find it helpful and share it with your team!
