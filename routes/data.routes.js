const Router = require('express')
const router = new Router()
const DataController = require("../controllers/data.controller")

router.post('/data/setData', DataController.setData)
router.post('/data/selectData', DataController.selectData)
router.get('/data/getAllData', DataController.getAllData)
router.post('/data/updateData', DataController.updateData)

module.exports = router;
