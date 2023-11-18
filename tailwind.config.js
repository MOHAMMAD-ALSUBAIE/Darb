/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            transitionDuration: ['block','hidden']
        },
        fontFamily: {
            'ElMessiri': ["El Messiri", 'Roboto'],
             'IBMPlexSans': ["IBM Plex Sans", 'Roboto'],
             // Ensure fonts with spaces have " " surrounding it.
          },
    },
    plugins: [],
};
