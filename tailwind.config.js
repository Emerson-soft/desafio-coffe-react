/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['roboto'],
        'baloo': ["'Baloo 2'"]
      },
      colors: {
        'yellow-dark': '#C47F17',
        'yellow': '#DBAC2C',
        'yellow-light': '#F1E9C9',
        'purple-dark': '#4B2995',
        'purple': '#8047F8',
        'purple-light': '#EBE5F9',
        'base-title': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#574F4D',
        'base-label': '#8D8686',
        'base-hover': '#D7D5D5',
        'base-button': '#E6E5E5',
        'base-input': '#EDEDED',
        'base-card': '#F3F2F2',
        'backgournd': '#FAFAFA'
      },
      borderRadius: {
        'card': '6px 36px 6px 36px',
        'card-checkout': '6px 44px 6px 44px',
      },
      fontSize: {
        l: ['1.25rem', { lineHeight: 1.3 }],
        m: ['1rem', { lineHeight: 1.3 }],
        s: ['0.875rem', { lineHeight: 1.3 }],
        xs: ['0.75rem', { lineHeight: 1.3 }],
        tag: ['0.625rem', { lineHeight: 1.3 }],
        'button-g': ['0.875rem', { lineHeight: 1.6 }],
        'button-m': ['0.75rem', { lineHeight: 1.6 }],        
      },
      gridTemplateColumns: {
        checkout: '2fr 1fr'
      }
    },    
  },
  plugins: [],
}

