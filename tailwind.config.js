module.exports = {
    content: ["./src/**/**.{js,ts,jsx,tsx}}", "./src/pages/**/**.{js,ts,jsx,tsx}", "./src/styles/**/**.{js,ts,jsx,tsx}", "./src/components/**/**.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            mobile: "0px",
            sm: "640px",
            lg: "1024px",
        },
        extend: {
            width: {
                logoNavWidth: "140px",
                logoHeroWidth: "240px",
                likesWidth: "40px",
                spinnerWidth: "150px",
                imageWidth: "460px",
                imageWidthMobile: "300px",
                browseLinkWidth: "215px",
            },
            height: {
                logoNavHeight: "30px",
                logoHeroHeight: "60px",
                likesHeight: "30px",
                spinnerHeight: "150px",
                imageHeight: "460px",
                imageHeightMobile: "300px",
            },
            zIndex: {
                background: "-10",
            },
            spacing: {
                imagesTop: "50px",
                logoTop: "70vh",
                logoTopMobile: "55vh",
            },
            colors: {
                shootingStar: "#E3414A",
                fallingStar: "#9E1A21",
            },
            animation: {
                slow: "spin 10s linear infinite",
            },
        },
    },
    plugins: [],
};
