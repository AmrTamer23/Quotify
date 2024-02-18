const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],

  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: {
        skin: {
          base: "var(--background-color)",
        },
        card: {
          base: "var(--card-color)",
        },
        button: {
          base: "var(--button-color)",
          hover: "var(--button-hover-color)",
        },
      },
      textColor: {
        skin: {
          base: "var(--text-color)",
          glow: "var(--text-glow)",
          faded: "var(--text-muted)",
        },
        button: {
          base: "var(--button-text-color)",
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        turquoise: {
          DEFAULT: "#5dd9c1",
          100: "#0c322b",
          200: "#186555",
          300: "#239780",
          400: "#2fcaab",
          500: "#5dd9c1",
          600: "#7ee1cd",
          700: "#9ee8da",
          800: "#bff0e6",
          900: "#dff7f3",
        },
        aquamarine: {
          DEFAULT: "#acfcd9",
          100: "#035230",
          200: "#06a35f",
          300: "#09f58f",
          400: "#5af9b4",
          500: "#acfcd9",
          600: "#bcfde1",
          700: "#cdfde8",
          800: "#defef0",
          900: "#eefef7",
        },
        african_violet: {
          DEFAULT: "#b084cc",
          100: "#25142f",
          200: "#4a285f",
          300: "#6f3c8e",
          400: "#9255b8",
          500: "#b084cc",
          600: "#c09dd6",
          700: "#d0b6e0",
          800: "#e0ceeb",
          900: "#efe7f5",
        },
        ultra_violet: {
          DEFAULT: "#665687",
          100: "#14111b",
          200: "#292236",
          300: "#3d3350",
          400: "#51446b",
          500: "#665687",
          600: "#8271a4",
          700: "#a195bb",
          800: "#c1b8d2",
          900: "#e0dce8",
        },
        russian_violet: {
          DEFAULT: "#190933",
          100: "#05020a",
          200: "#0a0415",
          300: "#0f061f",
          400: "#14072a",
          500: "#190933",
          600: "#3f1780",
          700: "#6524cd",
          800: "#9766e4",
          900: "#cbb3f2",
        },
      },
      fontFamily: {
        "pt-mono": ["PT Mono", "monospace"],
        young: ["Young Serif", "serif"],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
};
