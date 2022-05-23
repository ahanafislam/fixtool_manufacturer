module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/Images/banner.jpg')",
        'hero-bg-2': "url('/src/assets/Images/banner2.jpg')",
        'hero-bg-3': "url('/src/assets/Images/banner3.jpg')",
      }
    },
  },
  daisyui: {
    themes: [
      {
        fixtooltheme: {
          "primary": "#202447",  
          "secondary": "#fab915",        
          "accent": "#37CDBE",        
          "neutral": "#3D4451",        
          "base-100": "#FFFFFF",        
          "info": "#3ABFF8",        
          "success": "#36D399",        
          "warning": "#FBBD23",        
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}