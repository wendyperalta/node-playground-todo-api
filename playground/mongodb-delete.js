const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connec to MongoDB server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

  // deleteMany (deletes all items that match criteria)
  // db.collection('Todos').deleteMany({ text: 'Get ready for climbing' }).then((result) => {
  //   console.log(result);
  // });

  // deleteOne (deletes the first item that matches criteria)
  // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((results) => {
  //   console.log(results.result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({ name: 'Wendy' }).then((results) => {
  //   console.log(results.result);
  // });

  db.collection('Users').findOneAndDelete({ 
    _id: new ObjectID('5b764772d26a9a150620a250')
  }).then((result) => {
    console.log(result);
  });

  // client.close();
});