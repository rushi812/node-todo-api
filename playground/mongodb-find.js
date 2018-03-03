// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server!');
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    //toArray() will return promise sp we ave to handle promise
    // db.collection('Todos').find({
    //     _id: new ObjectID('5a99b248eaf9830718397e1b')
    // }).toArray().then((docs)=>{ 
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch Todos', err);
    // }); 

    // db.collection('Todos').find().count().then((count)=>{ 
    //     console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //     console.log('Unable to fetch Todos', err);
    // }); 

    db.collection('Users').find({name: 'Rushiraj Brahmbhatt'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
        return db.collection('Users').find({name: 'Rushiraj Brahmbhatt'}).count()
    }).then((count)=>{
        console.log(`There are ${count} Users`);
    }).catch((err)=>{
        console.log('Unable to fetch data from Users collection');
    });

    // client.close();
});