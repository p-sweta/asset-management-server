const express = require("express");
const router = express.Router();
const assetController = require("../controllers/asset-controller");
const { authorize } = require("../middleware/auth")

router.route('/').get( authorize, assetController.getAssets);
router.route('/:id').get( assetController.getAssetByID);
router.route('/').post( assetController.createAsset);
router.route('/:id').patch( assetController.updateAsset);
router.route('/:id').delete( assetController.deleteAsset);

module.exports = router;
