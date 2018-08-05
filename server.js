const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();


// DB Config
const db = require('./config/keys').mongoURI;

//Connect do MongoDB
mongoose
  .connect(db)
  .then( () => console.log('MongoDB connected!') )
  .catch(err => console(err));

app.get('/', (req, res) => res.send('Hello World!'));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
