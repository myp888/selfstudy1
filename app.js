//main app
const express = require('express');
const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Serve static files from the public folder
app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {
  const title = 'My Website';
  const header = 'Welcome to my website!';
  const footer = 'Thanks for visiting my website!';
  res.render('index', { title, header, footer });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
