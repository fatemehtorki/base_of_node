const multer = require('multer')

console.log('start')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/' + file.fieldname + '/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({
    
  storage: storage
})

const checkMultipart=function (req, res, next) {
    const contentType = req.headers["content-type"];
    // Make sure it's multipart/form
    if (!contentType || !contentType.includes("multipart/form-data")) {
        console.log('hereee')
        return res.sendStatus(500);
    }
    // const file = req.file
    // if (!file) {
    //   const error = new Error('Please upload a file')
    //   error.httpStatusCode = 400
    //   return next(error)
    // }
    next();
}

// const rewriter = function (req, res, next) {
//    
//     req.body.picUri = req.file.destination + req.file.filename;
//     next();
// }

module.exports = {
  upload,
//   rewriter,
  checkMultipart
}