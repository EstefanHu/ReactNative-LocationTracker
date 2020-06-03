require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const DB_CONNECTION = process.env.APP_DB || 'location_tracker';

mongoose.connect(`mongodb://localhost/${DB_CONNECTION}`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	});
mongoose.connection.once('open', () => {
	console.log(`connection has been established to ${DB_CONNECTION}`);
}).on('err', err => {
	console.error('Connection Error: ' + err);
});

app.get('/', (req, res) => {
	res.send('hello world');
});

app.listen(4000, () => {
	console.log('Listening on port 4000');
});
