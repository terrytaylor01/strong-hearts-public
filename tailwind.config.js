/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      textColor: {
        skin: {
          textprimary: "var(--color-text-primary)",
          textslogan: "var(--color-text-slogan-text)",
          footerlinks: "var(--color-text-footer)",
          involvedcards: "var(--color-text-involved-card)",
          adoptiontitle: "var(--color-adoption-title)",
          slogantext: "var(--color-slogan-text)",
          textsecondary: "var(--color-text-secondary)",
        },
      },
      backgroundColor: {
        skin: {
          textprimary: "var(--color-text-primary)",
          bgprimary: "var(--color-bg-primary)",
          bgsecondary: "var(--color-bg-secondary)",
          nav: "var(--color-nav)",
          viewall: "var(--color-viewall)",
          footer: "var(--color-footer)",
          profileabout: "var(--color-profile-about)",
        },
      },
      gradientColorStops: {
        skin: {
          fadeStart: "var(--color-fade-start)",
          fadeMid: "var(--color-fade-mid)"
        },
      },
      fill: {
        skin: {
          divider: "var(--color-divider-fill)",
          socials: "var(--color-social-icons)",
          profile: "var(--color-profile-icon)",
        },
      },

      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "farm-involved-background": "url('./src/assets/pawprints.svg')",
        "farm-adopt": "url('./src/assets/farm-adopt-card.png')",
        "farm-volunteer": "url('./src/assets/farm-volunteer-card.png')",
        "dog-adopt": "url(./src/assets/dog-adopt.png)",
        "dog-foster": "url(./src/assets/dog-foster.png)",
        "cat-foster": "url(./src/assets/cat-foster.png)",
        "cat-adopt": "url(./src/assets/cat-adopt.png)",
        "bun-foster": "url(./src/assets/bun-foster.png)",
        "bun-adopt": "url(./src/assets/bun-adopt.png)",
        none: "none",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
    },
  },
  plugins: [],
};
