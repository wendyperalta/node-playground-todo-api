const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connec to MongoDB server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b81cc35924911f4bd6b24e0')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, { 
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b7646b43c24a515005c5544')
  },{
    $set: { name: 'Wendy' },
    $inc: { age: 1 }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result);
  })

  // client.close();
});