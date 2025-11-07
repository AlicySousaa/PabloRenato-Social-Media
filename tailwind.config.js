/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,css,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        'dark-green': 'var(--color-dark-green)',
        'main-green': 'var(--color-main-green)',
        'light-green': 'var(--color-light-green)',
        'beige': 'var(--color-beige)',
        'cream': 'var(--color-cream)',
        'gray-custom': 'var(--color-gray)',
        'neon-green': 'var(--color-neon-green)',
        'dark-bg': 'var(--color-dark-bg)',
      },
      boxShadow: {
        'neon': '0 0 10px var(--color-neon-green)',
        'main-green': '0 0 15px rgba(92, 188, 96, 0.5)',
        'light-green': '0 0 20px rgba(197, 238, 157, 0.4)',
      }
    },
  },
  plugins: [],
}