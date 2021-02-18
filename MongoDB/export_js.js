//load(export_js.js)

db.temp.remove({});

var alldata = db.users.aggregate(
    [
        {
            '$match': {
                'userId': 12
            }
        },
        {
            '$unwind': {
                'path': '$profiles'
            }
        },
        {
            '$unwind': {
                'path': '$profiles.books'
            }
        },
        {
            '$match': {
                'profiles.books.name': {$in:["artistic-p1"]}
            }
        },
        {
            '$project': {
                email:1, 
                name:1, 
                _id:0
            }
        }
], {allowDiskUse: true}).toArray();

db.temp.insertMany(allData);
    