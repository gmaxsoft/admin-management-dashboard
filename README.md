# Adminfox

A React-based admin management dashboard built with Vite, TypeScript, and Material-UI.

## Technology Stack

### Core
- **React** 18.2 – UI library
- **TypeScript** 5.2 – Type-safe JavaScript
- **Vite** 5.2 – Build tool and dev server

### UI & Styling
- **Material-UI (MUI)** 5.15 – Component library
- **Emotion** 11.11 – CSS-in-JS styling
- **@mui/x-data-grid** 7.6 – Data tables
- **@iconify/react** 5.0 – Icon library

### Routing & State
- **React Router** 6.23 – Client-side routing

### Internationalization
- **i18next** 25.8 – i18n framework
- **react-i18next** 16.5 – React bindings for i18next

### Charts & Visualization
- **ECharts** 5.5 – Charts library
- **echarts-for-react** 3.0 – React wrapper for ECharts

### Other
- **Swiper** 11.1 – Touch slider/carousel
- **simplebar-react** 3.2 – Custom scrollbars

### Development
- **ESLint** 8.57 – Linting
- **Prettier** (via eslint-plugin-prettier) – Code formatting
- **TypeScript ESLint** 7.2 – TypeScript linting rules
- **vite-tsconfig-paths** 4.3 – Path alias support

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
src/
├── assets/          # Static assets (images, SVGs)
├── components/      # Reusable UI components
├── data/            # Static data and configuration
├── helpers/         # Utility functions
├── i18n/            # Internationalization (en.json)
├── layouts/         # Layout components (Sidebar, Topbar, Footer)
├── pages/           # Page components
├── providers/       # React context providers
├── routes/          # Router configuration
└── theme/           # MUI theme customization
```

## License

Private – Maxsoft
