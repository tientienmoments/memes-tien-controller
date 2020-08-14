var express = require("express");
var router = express.Router();
const photoHelper = require("../helpers/photo.helper");

const fileUpload = require("../helpers/upload.helper")("public/images/");
const uploader = fileUpload.uploader;
const memeController = require("../controllers/memeController")
/**
 * @route GET api/memes
 * @description Get all memes
 * @access Public
 */
router.get("/", memeController.getMemes);

router.get("/abc", function (req, res, next) {
  res.send({ status: "ok", data: "ABC" });
});
/**
* @route POST api/memes
* @description Create a new meme
* @access Public
*/
router.post(
  "/",
  uploader.single("image"),
  photoHelper.resize,
  memeController.createMeme
);
/**
 * @route GET api/memes/images
 * @description Get all memes
 * @access Public
 */
router.get("/images", memeController.getOriginalImages);
router.put('/:id', memeController.updateMeme);

module.exports = router;
