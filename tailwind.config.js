/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: 'var(--color-bg)',
      heading: 'var(--color-heading)',
      text: 'var(--color-text)',
      'fair-black': 'var(--color-pill-text)',
      title: 'var(--color-pill-bg)',
      primary: 'var(--color-primary-fill)',
      'primary-hover': 'var(--color-primary-fill-hover)',
      secondary: 'var(--color-secondary-fill)',
      'secondary-hover': 'var(--color-secondary-fill-hover)',
      tertiary: 'var(--color-tertiary-fill)',
      'tertiary-hover': 'var(--color-tertiary-fill-hover)',
      outline: 'var(--color-outline-fill)',
      lyrics: 'var(--color-lyrics-bg)',
      input: 'var(--color-input-fill)',
      'b-border': 'var(--color-bottom-border)',
      sun: 'var(--opacity-sun)',
      day: 'var(--opacity-day)',
      moon: 'var(--opacity-moon)',
      night: 'var(--opacity-night)',
      offset: 'var(--offset)',
    },
    screens: {
      'sm': '500px',
      'md': '600px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1200px',
      '3xl': '1536px'
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'san-serif'],
        garamond: ['Cormorant Garamond', 'serif'],
      }
    },
  },
  plugins: [],
}
