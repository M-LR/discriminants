/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app.js',
        './dist/index.html'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
    darkMode: 'class',
}