// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server!');
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2)); //ops will store all the docs that were inserted
    // });
    
    
    db.collection('Users').insertMany([{
        // _id: new ObjectID(),
        name: 'Rushiraj Brahmbhatt',
        age: 24,
        location: 'Edison'
    }, {
        // _id: new ObjectID(),
        name: 'John Doe',
        age: 26,
        location: 'New York'
    }], (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        // var res = result.ops;
        // res.forEach(element => {
        //     console.log(element._id.getTimestamp());
        // });
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});