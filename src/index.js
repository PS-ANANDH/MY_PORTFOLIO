import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Matrix Rain Effect - ENSURED VISIBILITY
const createMatrixRain = () => {
  // Remove existing matrix rain if any
  const existing = document.querySelector('.matrix-rain');
  if (existing) {
    existing.remove();
  }

  const matrixContainer = document.createElement('div');
  matrixContainer.className = 'matrix-rain';
  
  // Ensure it's visible and on top
  matrixContainer.style.position = 'fixed';
  matrixContainer.style.top = '0';
  matrixContainer.style.left = '0';
  matrixContainer.style.width = '100vw';
  matrixContainer.style.height = '100vh';
  matrixContainer.style.zIndex = '0'; // Middle layer
  matrixContainer.style.overflow = 'hidden';
  matrixContainer.style.pointerEvents = 'none';
  matrixContainer.style.background = 'transparent';
  
  document.body.appendChild(matrixContainer);

  const characters = '010101010101アイウエオABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const columnCount = Math.floor(window.innerWidth / 40);
  
  for (let i = 0; i < columnCount; i++) {
    createMatrixColumn(matrixContainer, i, characters);
  }
};

const createMatrixColumn = (container, columnIndex, characters) => {
  const column = document.createElement('div');
  column.style.position = 'absolute';
  column.style.left = `${columnIndex * 40 + Math.random() * 15}px`;
  column.style.top = '0';
  column.style.width = '1px';
  column.style.height = '100vh';
  column.style.overflow = 'visible';
  
  container.appendChild(column);

  const charCount = 10 + Math.floor(Math.random() * 8);
  
  for (let j = 0; j < charCount; j++) {
    setTimeout(() => {
      createMatrixCharacter(column, characters);
    }, j * 300);
  }
};

const createMatrixCharacter = (column, characters) => {
  const char = document.createElement('div');
  char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
  
  char.style.position = 'absolute';
  char.style.left = '0';
  char.style.top = '-50px';
  char.style.color = 'rgba(0, 255, 136, 0.4)';
  char.style.fontFamily = 'Courier New, monospace';
  char.style.fontSize = `${14 + Math.random() * 6}px`;
  char.style.textShadow = '0 0 6px rgba(0, 255, 136, 0.3)';
  char.style.opacity = '0';
  char.style.zIndex = '0';
  char.style.whiteSpace = 'nowrap';
  char.style.fontWeight = '300';
  
  const duration = 2 + Math.random() * 3;
  char.style.animation = `matrixFall ${duration}s linear infinite`;
  char.style.animationDelay = `${Math.random() * 2}s`;
  
  column.appendChild(char);
};

// Scroll progress indicator
const initScrollProgress = () => {
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      scrollProgress.style.transform = `scaleX(${scrollPercent})`;
    };

    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateScrollProgress);
    updateScrollProgress();
  }
};

// Error boundary for the entire app
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
          <div className="terminal-glass p-8 text-center max-w-md">
            <div className="text-4xl mb-4">💥</div>
            <h2 className="text-2xl text-red-400 mb-4">Something went wrong</h2>
            <p className="text-green-400 mb-4">
              The application encountered an unexpected error.
            </p>
            <button
              className="anime-button"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Initialize app
const root = ReactDOM.createRoot(document.getElementById('root'));

const initApp = () => {
  // Render the app
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );

  // Initialize effects after render
  setTimeout(() => {
    createMatrixRain();
    initScrollProgress();
  }, 100);

  // Recreate matrix rain on resize
  window.addEventListener('resize', () => {
    setTimeout(createMatrixRain, 300);
  });
};

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Export for potential testing
export { createMatrixRain };