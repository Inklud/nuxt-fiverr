/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    borderWidth: {
      default: '1px',
      0: '1px',
      2: '2px',
      4: '4px',
      8: '14px',
    },
    extend: {
      colors: {
        'lipscore-red': '#129F4C',
        'lipscore-blue':'#14568f',
        'lipscore-red-hover': '#0e7c3b',
        'lipscore-black-hover':'#1b2428',
        'lipscore-black':'#222d32'
      },
    },

  },
  variants: {},
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'content/**/*.md',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
