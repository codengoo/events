/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: "#FBF8F6",
                secondary: "#F4E9E2",
                border: "#F4E9E2"
            }
        }
    },
    variants: {},
    plugins: [],
};