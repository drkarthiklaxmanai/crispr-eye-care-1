/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{njk,html,md,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
