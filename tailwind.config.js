/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./src/**/*.vue'], // Tells Tailwindcss which files to scan (in our case, .vue files).
    content: [],
    safelist: ['w-full', 'h-full'], // Tells Tailwindcss to bundle safelist classes even if they aren't used in the project.
    theme: {
        extend: {
            maxWidth: {
                container: '1200px',
            },
            backgroundColor: {
                primary: '#f2f2f2',
            },
            colors: {
                primary: {
                    700: '#1d4ed8',
                    800: '#1e40af',
                },
                grey: {
                    100: '#EDEDED',
                    200: '#C4C4C4',
                    250: '#bdbdbd',
                    500: '#4A4343',
                },
                orange: {
                    600: '#FE6935',
                },
                secondary: '#726B6B',
                blackBlue: '#003',
                semantic: '#9C0101',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            },
            // Responsive media widths
            screens: {
                xs: '576px',
                sm: '640px',
                md: '768px',
                lg: '991px',
                xl: '1280px',
                '2xl': '1536px',
            },
            // More advanced settings may be used. I did the basics.
        },
    },
    plugins: [],
};
