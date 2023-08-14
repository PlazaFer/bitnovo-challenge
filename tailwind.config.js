/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      fontSize: {
        'xxl': '40px',
        'xl': '25px',
        'lg': '16px',
        'sm': '14px',
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans']
      },
      colors: {
        blue: {
          100: "#035AC5",
          800: "#002859"
        },
        gray: {
          100: "#D3DCE6",
          800: "#758192"
        },
        red: {
          800: "#B91C1C"
        }
      },
      borderRadius: {
        sm: "6px",
        lg: "24px"
      }
    },
  },
  plugins: [],
}

