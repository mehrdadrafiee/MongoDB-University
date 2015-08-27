var MongoClient = require ('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function (err, db) {
    if(err) throw err;

    var query = { 'grade' : 100 };
    var projection = { 'student': 1, '_id': 0 };

    db.collection('grades').find(query, projection).toArray(function (err, doc) {
        if(err) throw err;

        doc.forEach(function (doc) {
            console.log(doc);
            console.log(doc.student + " got a good grade!");
        });
        db.close();
    });
});