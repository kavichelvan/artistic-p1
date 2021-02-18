//connection string
db=connnect("mongodb://localhost:27017")

//db name
db = db.getSiblingDB('local')

//paste
var userId = []
var nUserId = []

for (i=0;i<userId.length;i++){
    var res = db.users.updateOne(
        {"userId": userId[i]},
        {$set: {"userId": nUserId}}
    );
    printjson(res);
}

// mongo shell command
// load("C:/Users/mongoupdate.js")