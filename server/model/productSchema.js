const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productName : String,
    price:Number,
    image:String
});

module.exports = mongoose.model("product",productSchema);

