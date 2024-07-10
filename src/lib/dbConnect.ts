import mongoose from 'mongoose';

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log('Already connected to database');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || '', {});

    connection.isConnected = db.connections[0].readyState;

    console.log('db is connected successfully')
  
  } catch (error) {
    console.error('Database connection failed:', error);

    process.exit(1);
  }
}

export default dbConnect;

  // Check if we have a connection to the database or if it's currently connecting(there can be multiple db)
      // Attempt to connect to the database
    // console.log(db.connection,'Database is connected successfully');
    // Graceful exit in case of a connection error
