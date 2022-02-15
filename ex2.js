var pgp = require('pg-promise')();


function f1(a, q) {
    return a(q) //f2()
}

function f2(t) {
    var db = pgp("postgres://postgres:postgres@127.0.0.1/vulnerablenode");
    return db.one(t);
}


module.exports.f1 = f1
module.exports.f2 = f2
