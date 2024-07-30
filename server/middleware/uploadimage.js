const multer = require("multer")

const store = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./image")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }

})

const upload = multer({
    storage: store
})

module.exports = { upload }