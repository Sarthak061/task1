// tailwind.config.js
module.exports = {
    content: [
      "index.html", // Update this path to your project structure
    ],
    theme: {
      extend: {
        animation: {
          'fade-in-left': 'fadeInLeft 1.5s ease-out forwards',
          'fade-in-right': 'fadeInRight 1.5s ease-out forwards',
          'fade-in-bottom': 'fadeInBottom 1.5s ease-out forwards',
          'fade-in-top': 'fadeInTop 1.5s ease-out forwards',
        },
        keyframes: {
          fadeInLeft: {
            '0%': {
              opacity: '0',
              transform: 'translateX(-100%)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)',
            },
          },
          fadeInRight: {
            '0%': {
              opacity: '0',
              transform: 'translateX(100%)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)',
            },
          },
          fadeInBottom: {
            '0%': {
              opacity: '0',
              transform: 'translateY(100%)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
          fadeInTop: {
            '0%': {
              opacity: '0',
              transform: 'translateY(-100%)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
        },
      },
    },
    plugins: [],
  };
  