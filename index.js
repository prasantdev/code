const express = require('express');
var exphbs  = require('express-handlebars');


const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));
app.use('/', require(path.join(__dirname,'routes/blog')))

app.listen(port, () => {
    console.log(`Blog app listening at http://localhost:${port}`);
})