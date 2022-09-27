module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        screens: {
          'mob': {'max': '767px'},
          'desk': {'min': '768px'},
        },
        colors: {
          'genesis-orange': '#EC6A2C',
          'background': '#F58025',
          'light-black': '#404353',
          'black': '#464958',
          'off-black': '#464958',
          'forecast-gray': '#EEEEEE',
        },
        fontFamily: {
          'largecurrency': ['Big Shoulders Display', 'sans-serif']
        },
        width: {
          '11/50': '20%',
          'width-preview': '40.5vh',
          'internal': 'calc(100% - 24px)',
          'ninety': '90%',
          'internal-desktop': 'calc(100% - 3rem)',
        },
        height: {
          '95': '95%',
          'height-preview': '87.75vh',
          '100': '100%',
          '100vh': '100vh',
          '60vh': '60vh',
          '80vh': '80vh',
          '80': '80%',
        },
        borderRadius: {
            '50': '50%',
        },
        borderWidth: {
          '1': '1px',
          '12': '12px',
          'device': '20px'
        },
        fontSize: {
          'xxs': '.50rem',
          'xxxs': '.40rem',
          'link': '0.8rem',
        },
        boxShadow: {
          'float': '0px 0px 60px 5px rgba(0, 0, 0, 0.2)',
        },
        
        backgroundImage: theme => ({
          'genesis': "url('/img/bg.png')",
          'dashboard':"url('/img/bg-dash.png')",
         })
      },
    },
  }