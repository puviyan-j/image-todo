const express = require("express");
const { addproduct , removeProduct ,searchProduct,allproduct} = require("../controller/productcontroller");
const { upload } = require("../middleware/uploadimage");
const router = express.Router();

router.post("/addproduct",upload.single("image"),addproduct);
router.delete("/deleteproduct/:id", removeProduct);
router.get("/searchproduct/:name", searchProduct);
router.get("/allproduct", allproduct);

module.exports = router