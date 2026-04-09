const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = 3000;

const uri = "mongodb+srv://sanjai:sobiya%4011@cluster0.fpam3wv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let collection;

async function runDB() {
  try {
    await client.connect();
    // This creates a database named 'SIT725' and a collection named 'task42'
    collection = client.db("SIT725").collection("task42");
    console.log("Connected to MongoDB successfully!");
  } catch (ex) {
    console.error("Connection failed!!", ex);
  }
}

runDB();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// This GETs data from your database to show on your website
app.get('/api/projects', async (req,res) => {
    try {
        const result = await collection.find({}).toArray();
        res.json({statusCode: 200, data: result, message: "Success"});
    } catch (err) {
        res.status(500).send(err);
    }
});

// This SAVES data from your website into your database
app.post('/api/projects', async (req,res) => {
    try {
        let newUser = req.body;
        await collection.insertOne(newUser);
        res.json({statusCode: 201, data: newUser, message: "User Saved to DB"});
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
