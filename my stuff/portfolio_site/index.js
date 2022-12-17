const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },

    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage })




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/', upload.array('multi-files'), (req, res) => {
  res.redirect('/');
});

app.listen(3000);
