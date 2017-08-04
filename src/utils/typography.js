import Typography from "typography"

const typography = new Typography({
  headerFontFamily: ['Rubik', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['Roboto Mono', 'Helvetica Neue', 'sans-serif'],
  baseFontSize: '16px',
  blockMarginBottom: 0.25,
  googleFonts: [
    {
      name: 'Rubik',
      styles: [
        '700',
        '900',
      ],
    },
    {
      name: 'Roboto Mono',
      styles: [
        '400',
        '500',
      ],
    },
  ],
});

export default typography