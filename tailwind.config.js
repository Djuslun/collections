/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        screens: {
            smm: '400px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        container: {
            center: false,
            padding: '1rem',
        },
        extend: {},
        plugins: [],
        'editor.quickSuggestions': {
            strings: true,
        },
    },
};
