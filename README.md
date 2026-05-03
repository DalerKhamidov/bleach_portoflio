# Bleach Portfolio

A personal portfolio website built with React, TypeScript, and Vite, featuring a Bleach anime-themed design with dual themes.

## 🌐 Live Demo

**View the live portfolio:** [https://dalerkhamidov.github.io/bleach_portoflio](https://dalerkhamidov.github.io/bleach_portoflio)

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd bleach_portoflio/
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run deploy` - Build and deploy to GitHub Pages

## 🚀 GitHub Pages Deployment

### Automatic Deployment (Recommended)

The project is configured with GitHub Actions for automatic deployment:

1. **Push to main branch** - Any push to `main` or `master` branch will automatically trigger deployment
2. **GitHub Actions** - The workflow will build and deploy your site to GitHub Pages
3. **Live site** - Your site will be available at `https://dalerkhamidov.github.io/bleach_portoflio`

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

### GitHub Pages Setup

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (created automatically)
   - Folder: `/ (root)`

2. **Update homepage URL** in `package.json` if needed:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

## 📦 Packages Used

### Core Dependencies

- **React** - UI library for building user interfaces
- **React DOM** - React rendering for web browsers

### Development Dependencies

- **TypeScript** (~5.8.3) - Type-safe JavaScript development
- **Vite** (^7.1.2) - Fast build tool and development server
- **gh-pages** (^6.1.1) - GitHub Pages deployment tool

### TypeScript Configuration

- **JSX Support** - React JSX compilation
- **ES2022 Target** - Modern JavaScript features
- **Strict Mode** - Enhanced type checking and error detection
- **Module Resolution** - Bundler mode for Vite compatibility

## 🏗️ Project Structure

```
bleach_portoflio/
├── .git/                    # Git repository
├── .github/workflows/       # GitHub Actions
├── dist/                    # Built files (for deployment)
├── node_modules/           # Dependencies
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # React components
│   ├── theme/             # Styling
│   └── types/             # TypeScript types
├── index.html             # Entry point
├── package.json           # Project configuration
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite configuration
└── README.md              # Documentation
```

## 🎨 Features

### Dual Theme System

- **Professional Theme** - Light theme with Quincy-inspired styling
- **Personal Theme** - Dark theme with Soul Society-inspired styling
- **Theme Toggle** - Switch between themes dynamically

### Portfolio Sections

1. **About** - Personal introduction and background
2. **Skills** - Technical skills and expertise
3. **Projects** - Showcase of completed projects
4. **Hobbies** - Personal interests and activities
5. **Contact** - Contact information and social links

### Technical Features

- **Responsive Design** - Mobile-friendly layout
- **Smooth Scrolling** - Navigation between sections
- **TypeScript** - Type-safe development
- **CSS Custom Properties** - Dynamic theming
- **Component-Based Architecture** - Modular and maintainable code

## 🛠️ Development

### TypeScript Configuration

The project uses strict TypeScript settings for enhanced type safety:

- Strict mode enabled
- Unused variable detection
- No implicit any types
- Modern ES2022 features

### Component Architecture

Each section is implemented as a separate React component with:

- Props interface for type safety
- Theme-aware styling
- Responsive design considerations

### Data Types

Defined interfaces for consistent data structures:

- `Skill` - Skills and expertise
- `Project` - Project information and links
- `Hobby` - Personal interests

## 📝 Notes

- The project uses Vite for fast development and building
- All components are written in TypeScript with strict type checking
- CSS is used for styling with custom properties for theming
- The application is a single-page application (SPA) with smooth navigation
- GitHub Pages deployment is configured for automatic updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
