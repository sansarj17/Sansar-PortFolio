/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                startBlue: {
                    100: "#ccd7ee",
                    200: "#99afdc",
                    300: "#6688cb",
                    400: "#3360b9",
                    500: "#0038a8",
                    600: "#002d86",
                    700: "#002265",
                    800: "#001643",
                    900: "#000b22",
                },
                endPink: {
                    100: "#f6cce2",
                    200: "#ec99c6",
                    300: "#e366a9",
                    400: "#d9338d",
                    500: "#d00070",
                    600: "#a6005a",
                    700: "#7d0043",
                    800: "#53002d",
                    900: "#2a0016",
                },
                midPurple: {
                    100: "#e8daeb",
                    200: "#d1b5d6",
                    300: "#ba91c2",
                    400: "#a36cad",
                    500: "#8c4799",
                    600: "#70397a",
                    700: "#542b5c",
                    800: "#381c3d",
                    900: "#1c0e1f",
                },
            },
        },
    },
    plugins: [],
};
