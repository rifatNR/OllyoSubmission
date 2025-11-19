/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontSize: {
                xxs: "0.7rem",
            },
            zIndex: {
                light: 100,
                "drag-button": "200",
                indicator: 900,
                modal: "1000",
            },
            colors: {
                "ollyo-body-bg": "#030712",
                "ollyo-sidebar-bg": "#101828",
                "ollyo-button": {
                    bg: "#1E2939",
                    "bg-selected": "#646F7F",
                    "bg-blue": "#2B7FFF",
                    border: "#364153",
                    color: "#E5E7EB",
                    icon: "#99A1AF",
                },
                "ollyo-canvas": {
                    bg: "#0A101D",
                    border: "#1E2939",
                },
                "ollyo-controller": {
                    fill: "#2B7FFF",
                    empty: "#030213",
                    border: "#4A5565",
                    "border-selected": "#2B7FFF",
                    bg: "#141B28",
                    yellow: "#FFE5B4",
                    white: "#F0F8FF",
                    blue: "#87CEEB",
                    red: "#FFB6C1",
                },
                "ollyo-modal": {
                    bg: "#141D2B",
                    "input-bg": "#364153",
                    color: "#99A1AF",
                    icon: "#E5E7EB",
                    border: "#364153",
                },
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))",
                },
            },
            fontFamily: {
                roboto: ["Roboto Slab", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            borderRadius: {
                "custom-rounded": "55px",
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            screens: {
                print: {
                    raw: "print",
                },
                xs: "392px",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
