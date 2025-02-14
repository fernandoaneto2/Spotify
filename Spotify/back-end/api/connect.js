
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://fernandoneto02:ECIEpgMK090fvKkP@cluster0.0mork.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("Spotify");
const songCollection = await db.collection("songs").find({}).toArray();

console.log(songCollection);

