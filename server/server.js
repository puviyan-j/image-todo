const express = require("express");
const cors = require("cors");
const router = require("./router/productRouter");
const mongoose = require("mongoose")
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/product")
    .then(() => {
        console.log(" DB Connected ");
        app.listen(5000, () => {
            console.log("server connected")
        }
        )
    }).catch(() => {
        console.log("db not connected")
    })

app.use("/image", express.static("image"))
app.use(cors())
app.use(express.json());


app.use("/api", router)


