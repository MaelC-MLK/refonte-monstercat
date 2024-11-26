/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors:   
        {
          'custom-white': 'var(--custom-white)',
          'custom-black': 'var(--charcoal)',
          'custom-green': 'var(--medium-sea-green)',
        },
        backgroundColor:  
        {
          'custom-white': 'var(--custom-white)',
          'custom-black': 'var(--charcoal)',
          'custom-green': 'var(--medium-sea-green)',
        },
        backgroundImage: {
          'fond': "url('/cover-large.webp')",
        },
        backgroundSize: {
          'fond': 'cover',
        },
    },
  },
  plugins: [],
};
