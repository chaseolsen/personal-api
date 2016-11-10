var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
// var session = require('express-session');
// var config = require(./config.json);

var app = express();

app.use(bodyParser.json());
// app.use(cors());
app.use(middleware.addHeaders);

// app.use(session({
//   secret: config.sessionSecret,
//   saveUninitialized: false,
//   resave: false
// }));

app.use(middleware.addHeaders);
// app.use(express.static('public')); <- name of folder (angular contents/projects in public folder)


//____________________________________________________
// app.get('/wishlist', function(req, res, next){
//   res.json(req.session.wishlist);
// });
//
// app.post('/wishlist', function(){
//  console.log(req.session);
//
//    -----if no wishlist
//  if(!req.session.wishlist){
//   req.session.wishlist = [];
//    }
//
//  req.session.wishlist.push(req.body);
//  res.sendStatus(204);
//
// });
//____________________________________________________


app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:name', mainCtrl.getHobbiesType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsName);

app.put('/name', mainCtrl.updateName);
app.put('/location', mainCtrl.updateLocation);
app.put('/occupations', mainCtrl.addOccupation);

app.listen(3000, function(){

});
