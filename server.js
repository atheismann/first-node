// load express module
const express = require('express');
const path = require('path');

//require the todo "database"
const todoDb = require('./data/todo-db');

// create our express app
const app = express();

//configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//mount middleware (app.use)

//mount routes
//define a "root" route directly on app
//Tomorrow, we'll use best practice routing
app.get('/', (req, res) => res.redirect('/home'));
app.get('/home', (req, res) => res.render('home', {cohort: 'SEI-CC-4'}));
app.get('/todos', (req, res) => res.render('todos/index', {todos: todoDb.getAll()}));

// tell the app to listed on port 3000
// for HTTP requests from clients
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
