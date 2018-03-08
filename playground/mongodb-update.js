// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server!');
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a9af83f62bae21fccbf30cb')
    // },{
    //     $set:{
    //         completed: false
    //     }
    // },{
    //     returnOriginal: false
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a9afdcfb645bc1453cb4639')
    }, {
            $set: {
                name: "Rushiraj Brahmbhatt"
            },
            $inc: {
                age : 1
            }
        },{
            returnOriginal: false
        }).then((result)=>{
            console.log(result);
        });

    // client.close();
});