/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(40 30% 85%)",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(26 24% 15%)",
        primary: {
          DEFAULT: "#FF6628",
          foreground: "hsl(0 0% 100%)",
        },
        secondary: {
          DEFAULT: "hsl(40 100% 97%)",
          foreground: "hsl(26 24% 15%)",
        },
        accent: {
          DEFAULT: "hsl(40 60% 90%)",
          foreground: "hsl(26 24% 15%)",
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Mulish', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        heading: ['Mulish', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      boxShadow: {
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'strong': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
}
