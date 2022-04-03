const {MongoClient, Db} = require('mongodb');

async function main(){

    const uri = "mongodb+srv://QuizMaster:QuizMasterPass@cluster0.jm17e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try{
        await client.connect();

        // gets list of databases.
        //await listDatabases(client);

        // Creating listing, calling function to create list. 
        // await createListing(client, {
        //     name:"Lovely Loft",
        //     summary: "A charming loft in paris",
        //     bedrooms:1,
        //     bathrooms:1
        // })

        await findOneListingByName(client, "quizzes");


    }catch(e){
        console.error(e);
    } finally {
        await client.close();
    }
}

// console logging the databases inside of the MongoDB database.
async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}

main().catch(console.error);

// CREATE (create listing)
async function createListing(client, newListing){
    const result = await client.db("Quizzes").collection("Quiz").insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`);
}

// READ (find listing)
async function findOneListingByName(client, nameOfListing){
    const result = await client.db("Quizzes").collection("Quiz").findOne({name:
    nameOfListing});

    if(result){
        console.log(`Found a listing in the collection with the name '${nameOfListing}'`);
        console.log(result);
    }else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

//MongoObject.Math[0]