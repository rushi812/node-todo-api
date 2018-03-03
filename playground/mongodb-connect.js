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

    // db.collection('Todos').insertMany([{
    //     text: 'Something to do',
    //     completed: false
    // },{
    //     text: 'walk dog',
    //     completed: false
    // },{
    //     text: 'learn mongo',
    //     completed: true
    // },{
    //     text: 'eat',
    //     completed: false
    // },{
    //     text: 'eat',
    //     completed: false
    // },{
    //     text: 'eat',
    //     completed: false
    // },{
    //     text: 'eat',
    //     completed: false
    // }], (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2)); //ops will store all the docs that were inserted
    // });
    
    
    db.collection('Users').insertMany([{
        name: 'Rushiraj Brahmbhatt',
        age: 24,
        location: 'Edison'
    }, {
        name: 'John Doe',
        age: 26,
        location: 'New York'
    }, {
        name: 'Rushiraj Brahmbhatt',
        age: 25,
        location: 'Piscatway'
    }, {
        name: 'Rushiraj Brahmbhatt',
        age: 30,
        location: 'Visnagar'
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