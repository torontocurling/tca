import Typography from "typography"

const typography = new Typography({
  headerFontFamily: ["Raleway", "sans-serif"],
  headerWeight: "700",
  boldWeight: "700",
  bodyFontFamily: ["Raleway", "sans-serif"],
  bodyWeight: "400",
  googleFonts: [
    {
      name: "Raleway",
      styles: ["400", "700"],
    },
  ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
