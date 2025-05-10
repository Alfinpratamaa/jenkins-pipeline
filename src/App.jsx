// App.jsx (same for both projects)
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary">
                  DevOps CI/CD
                </h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                className="text-dark hover:text-primary px-3 py-2 rounded-md font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-dark hover:text-primary px-3 py-2 rounded-md font-medium"
              >
                Features
              </a>
              <a
                href="#"
                className="text-dark hover:text-primary px-3 py-2 rounded-md font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-dark hover:text-primary px-3 py-2 rounded-md font-medium"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-primary focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="text-dark hover:text-primary block px-3 py-2 rounded-md font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-dark hover:text-primary block px-3 py-2 rounded-md font-medium"
              >
                Features
              </a>
              <a
                href="#"
                className="text-dark hover:text-primary block px-3 py-2 rounded-md font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-dark hover:text-primary block px-3 py-2 rounded-md font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex-grow bg-gray-50 items-center justify-center h-full flex">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl">
              <span className="block">Fail-Fast Error Detection</span>
              <span className="block text-primary mt-2">
                CI/CD Pipeline Comparison
              </span>
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Comparing the effectiveness of GitHub Actions and Jenkins for
              CI/CD pipelines with Fail-Fast Error Detection mechanisms.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 bg-transparent">
            <img
              className="rounded-lg  bg-transparent"
              src="/cicd-pipeline.png"
              alt="CI/CD Pipeline Visualization"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white mb-4 md:mb-0">
              <p>
                &copy; {new Date().getFullYear()} DevOps Research Project. All
                rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
