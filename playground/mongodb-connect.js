const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
  if (err) {
    return console.log('Unable to connec to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // insert new record into collection
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users collection { name, age, location }
  // db.collection('Users').insertOne({
  //   name: 'Wendy',
  //   age: 25,
  //   location: 'North Hollywood'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }

  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});