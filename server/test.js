const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://swastika202220chat_db_user:INtG0YZvmGFnHxjs@cluster0.iaohyvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function run() {
  try {
    const client = new MongoClient(uri);

    await client.connect();

    console.log("CONNECTED SUCCESSFULLY");

    await client.close();
  } catch (err) {
    console.log(err);
  }
}

run();