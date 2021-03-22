//jshint esversion:6
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useUnifiedTopology: true });

// Database Name
const dbName = 'naitiveMethodDB';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    // the following code examples can be pasted here...

    // return 'done.';


    //inserts 3 documents to documents collection
    const insertResult = await collection.insertMany([
        {
            name: "Pratik",
            score: 9
        },
        {
            name: "Shahi",
            score: 10
        },
        {
            name: "messi",
            score: 8
        },
    ]);
    console.log('Inserted documents =>', insertResult);

    //query that returns all the documents.
    const findResult = await collection.find({}).toArray()
    console.log('Found documents =>', findResult)
}


main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());




