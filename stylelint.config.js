module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: [
    // Bring in some extra rules for SCSS
    'stylelint-scss',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // Allow SCSS and CSS module keywords beginning with `@`
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
  ignoreFiles: ['.nuxt'],
}
