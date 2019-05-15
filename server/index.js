const express = require('express');
const app = express();
const port = 4455;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./api'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));



