/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                forest: "#064E3B",
                "lime-soft": "#F4F9D1",
                "lime-bright": "#A3E635",
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
}
