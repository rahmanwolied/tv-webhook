const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', async (req, res) => res.send('Hello World!'));
app.post('/webhook', async (req, res) => {
	const { account } = req.body;
	let port;
	if (!account) port = 8080;
	else if (account === 'wolied') port = 8084;
	else if (account === 'mosfik') port = 8080;
	else if (account === 'user1') port = 8081;

	try {
		axios.post(`http://178.16.139.13:${port}/order/webhook`, body);
		res.send('Webhook sent bro');
	} catch (error) {
		console.error(error);
		res.send('Error sending webhook');
	}
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
