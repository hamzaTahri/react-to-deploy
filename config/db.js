// Set the connection string based from the config vars of the production server
// To run locally use 'mongodb://localhost/mern-crud' instead of process.env.DB

module.exports = {
  db: 'mongodb+srv://ebanking:ebanking@cluster0.qkflv.mongodb.net/ebanking?retryWrites=true&w=majority'
};
