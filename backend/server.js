const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const tasks = require('./routes/tasks');
const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/taskmanager')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(cors());

app.use('/tasks', tasks);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
