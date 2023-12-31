const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        'primary': {
          DEFAULT: '#0d6efd',
          '50': '#eef8ff',
          '100': '#d8eeff',
          '200': '#b9e0ff',
          '300': '#89cfff',
          '400': '#52b4ff',
          '500': '#2a91ff',
          '600': '#0d6efd',
          '700': '#0c5ae9',
          '800': '#1149bc',
          '900': '#144194',
          '950': '#11295a',
        },
        'secondary': {
          DEFAULT: '#6c757d',
          '50': '#f5f6f6',
          '100': '#e5e7e8',
          '200': '#cdd1d4',
          '300': '#aab0b6',
          '400': '#808990',
          '500': '#6c757d',
          '600': '#565c64',
          '700': '#4a4f54',
          '800': '#414449',
          '900': '#3a3c3f',
          '950': '#242628',
        },
        'success': {
          DEFAULT: '#198754',
          '50': '#f0fdf6',
          '100': '#ddfbec',
          '200': '#bcf6d9',
          '300': '#88edbd',
          '400': '#4ddb98',
          '500': '#25c279',
          '600': '#19a061',
          '700': '#198754',
          '800': '#186340',
          '900': '#155237',
          '950': '#062d1c',
        },
        'danger': {
          DEFAULT: '#dc3545',
          '50': '#fef2f2',
          '100': '#fee6e5',
          '200': '#fccfcf',
          '300': '#f9a8a8',
          '400': '#f57779',
          '500': '#ec474f',
          '600': '#dc3545',
          '700': '#b7192c',
          '800': '#99182c',
          '900': '#83182c',
          '950': '#490812',
        },
        'warning': {
          DEFAULT: '#ffc107',
          '50': '#ffffea',
          '100': '#fffbc5',
          '200': '#fff885',
          '300': '#ffee46',
          '400': '#ffdf1b',
          '500': '#ffc107',
          '600': '#e29400',
          '700': '#bb6902',
          '800': '#985108',
          '900': '#7c420b',
          '950': '#482200',
        },
        'info': {
          DEFAULT: '#0dcaf0',
          '50': '#ecfdff',
          '100': '#cef9ff',
          '200': '#a3f2fe',
          '300': '#64e6fc',
          '400': '#0dcaf0',
          '500': '#01b1d9',
          '600': '#048db6',
          '700': '#0b7193',
          '800': '#135b77',
          '900': '#144c65',
          '950': '#073245',
        },
        'light': {
          DEFAULT: '#f8f9fa',
          '50': '#f8f9fa',
          '100': '#eceff2',
          '200': '#d6dce1',
          '300': '#b2bec7',
          '400': '#889ba8',
          '500': '#697e8e',
          '600': '#546775',
          '700': '#45535f',
          '800': '#3c4750',
          '900': '#353d45',
          '950': '#23292e',
        },
        'dark': {
          DEFAULT: '#212529',
          '50': '#f6f6f7',
          '100': '#e0e5e7',
          '200': '#c2c9cd',
          '300': '#9ba7ad',
          '400': '#76828b',
          '500': '#5b6871',
          '600': '#485159',
          '700': '#3c4349',
          '800': '#33373c',
          '900': '#2d3034',
          '950': '#212529',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
};
