const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/submit', (req, res) => {
  const { name, std, department } = req.body;
  console.log('Received Form Data:');
  console.log(`Name: ${name}`);
  console.log(`Standard: ${std}`);
  console.log(`Department: ${department}`);
  res.send(`<h2>Thank you, ${name}!</h2><p>Your data has been received.</p>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost: ${PORT}`));
