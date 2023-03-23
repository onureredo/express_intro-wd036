const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

// app.get('/', (req, res) => res.send('Wake up Momtaz!'));

//ROUTING
// app
//   .route('/')
//   .get((req, res) => res.send('We retrieve a message!'))
//   .post((req, res) => res.send('We create a message'))
//   .put((req, res) => res.send('We update a message'))
//   .delete((req, res) => res.send('We delete a resource'));

//RESPONSE TYPES
//JSON

app.get('/data', (req, res) => {
  const data = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  };
  res.json(data);
});

//HTML
// app.get('/index', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

//REDIRECT
// app.get('/redirect', (req, res) => {
//   res.redirect('/new-location');
// });

// app.get('/new-location', (req, res) => {
//   res.send('redirected');
// });

//DOWNLOAD
// app.get('/download', (req, res) => {
//   res.download('index.js');
// });

//GET ELEMENTS FROM URL
// app.get('/users/:id', (req, res) => {
//   res.send(`USER ID: ${req.params.id}`);
// });

//TEMPLATE ENGINES *PUG
// app.set('view engine', 'pug');

// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render('index');
// });

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
