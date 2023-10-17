const { Router } = require("express");
const { index, store } = require("../controllers/pontoController");

const router = Router();

router.get("/", index);

router.post("/", store);

module.exports = router