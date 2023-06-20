const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const primary = colors.blue;
const secondary = colors.pink;
const info = colors.sky;
const warning = colors.amber;
const success = colors.emerald;
const error = colors.red;

module.exports = {
    content: [
        "./assets/**/*.{vue,js,css}",
        "./components/**/*.{vue,js}",
        "./components/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./server/**/*.{js,ts}",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./*.{vue,js,ts}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary,
                secondary,
                info,
                warning,
                success,
                error,
                "retroBlue":"#2E6FF2",
                "andreaBlue":"#4174D9",
                "blueBlush":"#D7D9D8",
                "capriIsle":"#4F5954",
                "springKiss":"#E5F2B6",
            },
            textColor: {
                skin: {
                    base: "var(--color-text-base)",
                    muted: "var(--color-text-muted)",
                    active: "var(--color-text-active)",
                    hover: "var(--color-text-hover)",
                    icon: "var(--color-text-icon)",
                },
            },
            backgroundColor: {
                skin: {
                    fill: "var(--color-fill)",
                    "fill-active": "var(--color-fill-active)",
                    "fill-hover": "var(--color-fill-hover)",
                    "icon-fill": "var(--color-icon-fill)",
                },
            },
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    // plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
