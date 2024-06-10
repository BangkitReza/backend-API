const express = require("express")
const multer = require("multer");
const handler = require("./handler");

const multerStorage = multer.memoryStorage();
const router = express.Router();
const upload = multer();
const uploadData = multer({storage: multerStorage});


// handler.js mengatur semua route

router.post('/register', upload.none(), handler.registration) // route untuk registrasi
router.post('/login', upload.none(),handler.login) // route untuk login
router.post('/logout', handler.logout) // route untuk logout
router.post('/resetpassword', upload.none(), handler.passwordReset) // route untuk reset password pengguna
router.get('/users', upload.none(), handler.getUsers) // route untuk melihat data semua pengguna
router.get('/users/:uid', upload.none(), handler.getUserUid) // route untuk melihat data pengguna tertentu berdasarkan UID
router.post('/predict', upload.none(), handler.predictionStunt)
router.get('/predictionHistory',upload.none(), handler.getAllPrediction)
router.post('/article', upload.none(), handler.postArticle) // route untuk publish artikel
router.get('/article', handler.getAllArticles) // route untuk mengambil semua artikel
router.get('/article/:uid', handler.getArticleByUID) // route untuk mengambil artikel tertentu berdasarkan UID

module.exports = router;