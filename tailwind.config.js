module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
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