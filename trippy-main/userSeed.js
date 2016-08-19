var models = require('./models');

var x;
var newUser1 = {
  email: 'brittanysburroughs@gmail.com',
  username: 'brittanysu',
  password: 'password',
  fname: 'Brittany',
  lname:'Burroughs'
};

models.User.create({
  email: 'brittanysburroughs@gmail.com',
  username: 'brittanysu',
  password: 'password',
  fname: 'Brittany',
  lname:'Burroughs'
})
.then(function(result){

});


var newUser2 = {
  email: 'markdao@gmail.com',
  username: 'markdao',
  password: 'password',
  fname: 'Mark',
  lname:'Dao'
};

models.User.create(newUser2)
.then(function(result){

});


var newUser3 = {
  email: 'mikeboire@gmail.com',
  username: 'mikeboire',
  password: 'password',
  fname: 'Mike',
  lname:'Boire'
};

models.User.create(newUser3)
.then(function(result){

});


var newUser4 = {
  email: 'jonathanstewart@gmail.com',
  username: 'jonathanstewart',
  password: 'password',
  fname: 'Jonathan',
  lname:'Stewart'
};

models.User.create(newUser4)
.then(function(result){

});


var newUser5 = {
  email: 'johndoe@gmail.com',
  username: 'johndoe',
  password: 'password',
  fname: 'John',
  lname:'Doe'
};

models.User.create(newUser5)
.then(function(result){

});

var newUser6 = {
  email: 'janedoe@gmail.com',
  username: 'janedoe',
  password: 'password',
  fname: 'Jane',
  lname:'Doe'
};

models.User.create(newUser6)
.then(function(result){

});


var newUser7 = {
  email: 'johnstockton@gmail.com',
  username: 'jstocks1',
  password: 'password',
  fname: 'John',
  lname:'Stockton'
};

models.User.create(newUser7)
.then(function(result){

});


var newUser8 = {
  email: 'ironmike@gmail.com',
  username: 'ironmike',
  password: 'password',
  fname: 'Mike',
  lname:'Tyson'
};

models.User.create(newUser8)
.then(function(result){

});


var newUser8 = {
  email: 'shannon@gmail.com',
  username: 'shannon',
  password: 'password',
  fname: 'Shannon',
  lname:'Smith'
};

models.User.create(newUser8)
.then(function(result){

});


var newUser9 = {
  email: 'scott@gmail.com',
  username: 'scott123',
  password: 'password',
  fname: 'Scott',
  lname:'Robbins'
};

models.User.create(newUser9)
.then(function(result){

});

var newUser10 = {
  email: 'exampleuser@gmail.com',
  username: 'exampleuser',
  password: 'password',
  fname: 'example',
  lname:'user'
};

models.User.create(newUser10)
.then(function(result){

});


models.sequelize.sync();