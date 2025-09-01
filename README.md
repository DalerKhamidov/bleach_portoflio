# Bleach Portfolio

A personal portfolio website built with React, TypeScript, and Vite, featuring a Bleach anime-themed design with dual themes (Quincy and Soul Society).

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd bleach_portoflio/bleach-portfolio
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

## 📦 Packages Used

### Core Dependencies

- **React** - UI library for building user interfaces
- **React DOM** - React rendering for web browsers

### Development Dependencies

- **TypeScript** (~5.8.3) - Type-safe JavaScript development
- **Vite** (^7.1.2) - Fast build tool and development server

### TypeScript Configuration

- **JSX Support** - React JSX compilation
- **ES2022 Target** - Modern JavaScript features
- **Strict Mode** - Enhanced type checking and error detection
- **Module Resolution** - Bundler mode for Vite compatibility

## 🏗️ Project Structure

```
bleach-portfolio/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── App.tsx        # Main application component
│   │   ├── About.tsx      # About section component
│   │   ├── Skills.tsx     # Skills section component
│   │   ├── Projects.tsx   # Projects section component
│   │   ├── Hobbies.tsx    # Hobbies section component
│   │   ├── Contact.tsx    # Contact section component
│   │   └── ThemeToggle.tsx # Theme switching component
│   ├── theme/             # Styling and themes
│   │   └── styles.css     # CSS styles and theme definitions
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts       # Interface definitions for data structures
│   ├── index.tsx          # Application entry point
│   ├── vite-env.d.ts      # Vite environment types
│   └── typescript.svg     # TypeScript logo
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── node_modules/          # Installed dependencies
```

## 🎨 Features

### Dual Theme System

- **Quincy Theme** - Light theme with Quincy-inspired styling
- **Soul Society Theme** - Dark theme with Soul Society-inspired styling
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

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
