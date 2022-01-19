module.exports = {
  content: [
    "./src/**/**.{js,ts,jsx,tsx}}",
    "./src/pages/**/**.{js,ts,jsx,tsx}",
    "./src/styles/**/**.{js,ts,jsx,tsx}",
    "./src/components/**/**.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "360px",
      sm: "640px",
    },
    extend: {
      width: {
        logoNavWidth: "140px",
        logoHeroWidth: "240px",
        likesWidth: "40px",
      },
      height: {
        logoNavHeight: "65px",
        logoHeroHeight: "60px",
        likesHeight: "30px",
      },
      zIndex: {
        background: "-10",
      },
      spacing: {
        marginHeroLogo: "-14%",
        marginHeroLogoMobile: "-20%",
      },
      colors: {
        shootingStar: "#FC636B",
      },
    },
  },
  plugins: [],
};
