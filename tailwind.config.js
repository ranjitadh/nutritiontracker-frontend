export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        '3xl': '50px',
      },
      boxShadow: {
        '3xl': '7px 7px 14px #b5b5b5, -7px -7px 14px #ffffff'
      },
      backgroundImage: {
        'fitness': 'url(https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-fitness-exercise-run-banner-background-image_255468.jpg)'
      }
    }
  },
  plugins: [],
};
