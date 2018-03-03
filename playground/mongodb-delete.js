// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server!');
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'eat'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Rushiraj Brahmbhatt'}).then((res)=>{
    //     console.log(`Number of deleted documents: ${res.result.n}`);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat'}).then((res)=>{
    //     console.log(res);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res)=>{
    //     console.log(res);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a9afd91aa141d19a8b732d7')}).then((res)=>{
        console.log(res);
    });

    // client.close();
});