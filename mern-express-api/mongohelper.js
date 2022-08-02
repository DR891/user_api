var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var dbname = "library";
function add(collectioname, object) { //need to pass these params into another func, in this case its in index.js
  //can be used with any collection and any object can be added
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbname); //connects to DB
    dbo.collection(collectioname).insertOne(object, function (err, res) {
      //connects to collection
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}

module.exports.findAll = async function findAll(collectioname,callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbname);
    dbo
      .collection(collectioname)
      .find({})
      .toArray(function (err, result) {
        //creating API endpoint
        if (err) throw err;
        db.close();
        callback(result);
      });
  });
};
function update(collectioname, searchOBJ, updateOBJ) { //what the request will iterate through 
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbname); //connects to DB
    var myquery = searchOBJ;
    var newvalues = { $set: updateOBJ };
    dbo
      .collection(collectioname)
      .updateOne(myquery, newvalues, function (err, res) {// updates searchOBJ,and updates the OBJ, only way it can be updated without and action is through the browser.
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
  });
}

module.exports.update = update
module.exports.add = add;
