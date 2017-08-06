import Typography from "typography"

const typography = new Typography({
  headerFontFamily: ['Rubik', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['Roboto Mono', 'Helvetica Neue', 'sans-serif'],
  baseFontSize: '16px',
  blockMarginBottom: 0.8,
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
  overrideStyles: ({ rhythm }, options, styles) => ({
    'h1,h2,h3,h4': {
      marginBottom: rhythm(0.25),
      marginTop: rhythm(0.25),
    }
  })
});

export default typography