import mongoose from 'mongoose';

try {
  const mongoURI = process.env.MONGO_URI;
  if (!mongoURI) throw new Error('Missing connection string');
  // Connect
  await mongoose.connect(mongoURI, { dbName: 'eCommerce-API' });
  console.log('\x1b[35mMongoDB connected via Mongoose\x1b[0m');
} catch (error) {
  // Log error and end Node process if it fails
  console.error('MongoDB connection error:', error);
  process.exit(1);
}
