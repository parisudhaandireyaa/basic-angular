const express = require('express');

const app = express();

const PORT = 3000;
const cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const ClothRouter = require('./Router/clothRouter.js');

app.use(cors());
app.use('/api', ClothRouter);

app.listen(PORT, () => console.log(`App is running on PORT -${PORT}`));