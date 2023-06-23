const express = require("express");
const router = express.Router();
const assetController = require("../controllers/asset-controller");
const { protect } = require("../middleware/auth")

router.route('/').get(protect, assetController.getAssets);
router.route('/:id').get(protect, assetController.getAssetByID);
router.route('/').post(protect, assetController.createAsset);
router.route('/:id').patch(protect, assetController.updateAsset);
router.route('/:id').delete(protect, assetController.deleteAsset);

module.exports = router;
