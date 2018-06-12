const sass = require('@stencil/sass');
exports.config = {
	plugins: [
    sass({
      injectGlobalPaths: [
        'node_modules/swiper/dist/css/swiper.min.css'
      ]
    })
  ],
	collections: [
		{ name: '@stencil/router' },
		{ name: '@ionic/core' }
	],
	serviceWorker: {
		swSrc: 'src/sw.js'
	},
	globalStyle: 'src/global/app.css'

};

exports.devServer = {
	root: 'www',
	watchGlob: '**/**'
};
