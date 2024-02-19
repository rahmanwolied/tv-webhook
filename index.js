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
	const body = req.body;
	try {
		axios.post('http://178.16.139.13:8084/order/webhook', body);
		res.send('Webhook sent');
	} catch (error) {
		console.error(error);
		res.send('Error sending webhook');
	}
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
