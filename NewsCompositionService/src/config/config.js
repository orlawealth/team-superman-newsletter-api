let DB_URI = 'mongodb+srv://ndubuisijr:Chukuigwe@1@node-rest-shop-eewl4.mongodb.net/microservices?retryWrites=true&w=majority';

if (process.env.MONGO_DB_URI) {
  DB_URI = process.env.MONGO_DB_URI;
}

module.exports = {
  DB_URI
};
