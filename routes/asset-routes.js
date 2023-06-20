const express = require("express");
const router = express.Router();
const assetController = require("../controllers/asset-controller");

router.route('/').get(assetController.getAssets);
router.route('/:id').get(assetController.getAssetByID);
router.route('/').post(assetController.createAsset);
router.route('/').patch(assetController.updateAsset);
router.route('/').delete(assetController.deleteAsset);

module.exports = router;
