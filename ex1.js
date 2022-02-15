var express = require('express');
var router = express.Router();


var x = require('./ex2').f1
var y = require('./ex2').f2

var z = x

function f(x, s){
    return x(y, s) // f1(f2, q)
}


router.post("/login/auth", function(req, res) {
    var u = req.body.username;
    var p = req.body.password;

    var q = "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";

    return f(z, q)
});




