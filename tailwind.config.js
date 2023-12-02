/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
    theme: {
        extend: {
            transitionDuration: ['block','hidden']
        },
        fontFamily: {
            'Arvo': ["Arvo", "serif"],
            'IBMPlexSans': ["IBM Plex Sans", "sans-serif"],
             // Ensure fonts with spaces have " " surrounding it.
          },
    },
    plugins: [],
};
