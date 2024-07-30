const { upload } = require("../middleware/uploadimage");
const productSchema = require("../model/productSchema");
const express = require("express")
const { rm } = require("fs")


const addproduct = async (req, res) => {

    try {

        const { productName, price } = req.body;
        const image = req.file;
        console.log(image)
        const data = new productSchema({
            productName, price,
            image: image?.path
        })

        const save = await data.save()
        res.send(save)
    }
    catch (error) {
        res.status(500).send({ message: "internal server Error " })
    }
}

const allproduct = async (req, res) => {
    const data = await productSchema.find();
    res.send(data)

}

const searchProduct = async (req, res) => {

    try {
        const name = req.params.name

        const data = await productSchema.find({ productName: name });

        if (!data) {
            return res.send("No data available")
        }
        res.send(data)

    } catch (error) {
        res.status(500).send({ message: "Internal server Error" })
    }
}

const removeProduct = async (req, res) => {
    try {

        const product = await productSchema.findById(req.params.id)
        if (product.image) {
            rm(product.image, () => {
                console.log("image deleted")
            })
        }

        await product.deleteOne()
        res.send("product deleted")


    } catch (error) {
        res.status(500).send({ message: "Internal server Error" })
    }

}



module.exports = { addproduct, removeProduct, searchProduct, allproduct }