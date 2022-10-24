import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        normal: "#1F1F1F",
        placeholder: "#CECECE",

        primary: {
          DEFAULT: '#0463BB',
          700: '#0463BB',
          600: '#0573DA',
          500: '#0684F9',
          400: '#59ADFB',
          300: '#ACD6FD',
        },

        secondary: {
          DEFAULT: "#10248E",
          700: "#10248E",
          600: "#1836D5",
          500: "#5169EB",
          400: "#7D8FF0",
          300: "#A8B4F5",
        },

        error: "#E32424",
        success: "#46BA1D",
        label: "#8A92A6",
        icon: "#474747",

        table: {
          bg: {
            odd: "#202427",
            even: "#2E3235",
          },
          normal: "#FFFFFF"
        }

      },
      fontFamily: {
        sans: ["Source Sans Pro"],
        serif: ["Source Sans Pro"]
      }
    }
  },
  plugins: [],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`
  ]
}
