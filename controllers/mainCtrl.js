var user = require('./user.js');

module.exports = {

  getName: function(req, res, next){
    console.log('hello');
    res.json(user.name);
  },

  getLocation: function(req, res, next){
    res.json(user.location);
  },

  getOccupations: function(req, res, next){
    res.json(user.occupations);
  },

  getOccupationsLatest: function(req, res, next){
    res.json({
      "latestOccupations": user.occupations[user.occupations.length-1]
    });
  },

  getHobbies: function(req, res, next){
    res.json(user.hobbies);
  },

  getHobbiesType: function(req, res, next){
    var result = user.hobbies.filter(
      function(hobby){
        return hobby.name === req.params.name;
      }
    );
    res.json(result);
  },

  getFamily: function(req, res, next){
    res.json(user.family);
  },

  getFamilyGender: function(req, res, next){
    var result = user.family.filter(
      function(member){
        return member.gender === req.params.gender;
      }
    );
    res.json(result);
  },

  getRestaurants: function(req, res, next){
    res.json(user.restaurants);
  },

  getRestaurantsName: function(req, res, next){
    var result = user.restaurants.filter(
      function(location){
        return location.name === req.params.name;
      }
    );
    res.json(result);
  },

  updateName: function(req, res, next){
    user.name = req.body.name;
    res.json({
      "name": user.name
    });
  },

  updateLocation: function(req, res, next){
    user.location = req.body.location;
    res.json({
      "location": user.location
    });
  },

  updateOccupation: function(req, res, next){
  user.occupations.push(req.body.occupation)
  res.json(user.occupations);
  },




};
