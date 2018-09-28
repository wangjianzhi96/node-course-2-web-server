const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{

res.render('home.hbs',{
 welcomeMessage: "Welcome to my webpage",
 pageTitle: "MainPage",
 currentYear: new Date().getFullYear()

});

});

app.get('/about',(req,res)=> {
//  res.send('About Page');
  res.render('about.hbs',{
   pageTitle: "About page",
   currentYear: new Date().getFullYear()

});

});

app.get('/bad', (req,res)=> {
  res.send({
    ErrorMessage: "Unable to handle Request"
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
