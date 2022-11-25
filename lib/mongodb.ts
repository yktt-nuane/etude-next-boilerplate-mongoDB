import { MongoClient, Db } from 'mongodb'

const { MONGODB_URI: uri, MONGODB_DB: dbName } = process.env

let cachedClient: MongoClient
let cachedDb: Db

export async function connectToDatabase() {
  // check the cached.
  if (cachedClient && cachedDb) {
    // load from cache
    return {
      client: cachedClient,
      db: cachedDb,
    }
  }

  // set the connection options
  //const opts = {
  //    useNewUrlParser: true,
  //  useUnifiedTopology: true,
  //}
  //

  // check the MongoDB URI
  if (!uri) {
    throw new Error('Define the MONGODB_URI environmental variable')
  }
  // check the MongoDB DB
  if (!dbName) {
    throw new Error('Define the MONGODB_DB environmental variable')
  }

  // Connect to cluster
  const client = new MongoClient(uri)
  await client.connect()
  const db = client.db(dbName)

  // set cache
  cachedClient = client
  cachedDb = db

  return {
    client: cachedClient,
    db: cachedDb,
  }
}
