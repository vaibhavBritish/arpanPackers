import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    if (!uri) {
      throw new Error('Please add your Mongo URI to .env.local');
    }
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else if (uri) {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
} else {
  // If no URI is provided at build-time (e.g., in a Docker build),
  // we return a promise that will eventually be rejected at runtime 
  // if accessed without a URI.
  clientPromise = Promise.resolve().then(() => {
    throw new Error('Please add your Mongo URI to environment variables');
  });
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
