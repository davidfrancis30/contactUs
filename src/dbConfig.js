const mongoose = require("mongoose");
const connectionUrl = process.env.MONGO_DB_CONNECTION_STRING;

const connect = mongoose.connect(connectionUrl);
connect
	.then(() => console.log("Connected to DB"))
	.catch((err) => console.log(err));
