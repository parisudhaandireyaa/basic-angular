const mongo = require('mongoose');

mongo.connect("mongodb://localhost:27017/cloths", function (err, res) {
    if (err) throw err;
    console.log("succesfully conected to mongodb");
});

const clothSchema = mongo.Schema({
    dress_code: {
        type: String,
        required: true,
        unique: true
    },
    brand: {
        type: String
    },
    gender: {
        type: String
    },
    type: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        min: 0
    }
});

module.exports = mongo.model("clothModel", clothSchema);