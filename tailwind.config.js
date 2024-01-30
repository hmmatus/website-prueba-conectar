/** @type {import('tailwindcss').Config} */
import {Colors} from './src/styles/color';
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      transparent: Colors.transparent,
      current: Colors.current,
      white: Colors.white,
      primary: Colors.primary,
      'error-primary': Colors['error-primary'],
      'focus-primary': Colors['focus-primary']
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
