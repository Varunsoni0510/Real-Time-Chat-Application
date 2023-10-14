var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/dev", function (req, res, next) {
  res.render("dev", { title: "dev" });
});

router.get("/news", function (req, res, next) {
  res.render("news", { title: "news" });
});

router.get("/market", function (req, res, next) {
  res.render("market", { title: "market" });
});

router.get("/career", function (req, res, next) {
  res.render("career", { title: "career" });
});
router.get("/blood", function (req, res, next) {
  res.render("blood", { title: "blood" });
});
router.get("/java", function (req, res, next) {
  res.render("java", { title: "java" });
});

router.get("/ngo", function (req, res, next) {
  res.render("ngo", { title: "ngo" });
});

router.get("/it", function (req, res, next) {
  res.render("it", { title: "it" });
});

router.get("/cricket", function (req, res, next) {
  res.render("cricket", { title: "cricket" });
});

router.get("/python", function (req, res, next) {
  res.render("python", { title: "python" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "about" });
});

router.get("/howtouse", function (req, res, next) {
  res.render("howtouse", { title: "How To Use" });
});
module.exports = router;
