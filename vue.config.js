module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'Energy IQ Demo'
        }
    },
    pwa: {
        name: 'Energy IQ Demo',
        themeColor: '#EC6A2C',
        msTileColor: '#EC6A2C',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#EC6A2C',
    },
    // devServer: {
    //     open: process.platform === 'darwin',
    //     host: '0.0.0.0',
    //     port: 8080, // CHANGE YOUR PORT HERE!
    //     https: false,
    //     hotOnly: false,
    //   },
};