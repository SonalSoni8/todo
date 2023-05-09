/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            xs: '340px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px',
        },
        extend: {
            fontFamily: {
                Quicksand: ['Quicksand', 'sans-serif'],
                JoseFinSans: ['Josefin Sans', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('tailwindcss-animated'),
        require('@marcoguidara/tailwindcss-quick-center'),
    ],
};
