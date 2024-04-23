const { MongoMemoryServer } = require('mongodb-memory-server');

async function startMongoDB() {
    const mongod = new MongoMemoryServer();
    await mongod.start();

    console.log('MongoDB Memory Server started:', mongod.getUri());

    // Additional setup or operations with MongoDB can be performed here
}

startMongoDB().catch(error => {
    console.error('Error starting MongoDB Memory Server:', error);
});
