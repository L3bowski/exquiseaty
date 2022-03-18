const express = require('express');
const { join } = require('path');

module.exports = () => {
	const app = express();
	app.use('/exquiseaty', express.static(__dirname));
	return app;
};
