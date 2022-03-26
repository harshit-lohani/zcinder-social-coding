var Codeforces = require('../node_modules/codeforces-api');
// var env = require('env');

Codeforces.setApis('c355b982df9c86902c506e41e7a5ffa7cd432792', '4af7cda608b19e67c230f59c8be0f6a5df6138db');

var parameters = {
    handle: 'ishangarg09',
    // onlyOnline: false
};

Codeforces.user.status(parameters, function (err,data) {
    if(err){
        return console.log(err);
    }
    console.log(data);
    // const obj = JSON.parse(data);
    // console.log(obj.id);
});


//user.status to return all the submissions of user
//user.rating will return user rating + the details of contest he has participated in
