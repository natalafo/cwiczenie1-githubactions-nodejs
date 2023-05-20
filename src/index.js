const app = require("./app");
const port = process.env.PORT || 3000;

app.listener(port, () =>
	console.log('Aplikacja nasluchuje na porcie 3000');
);
