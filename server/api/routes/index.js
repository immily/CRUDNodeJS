const express = require('express');
const router = express.Router();


/* GET api listing. */
router.get('/api', (req, res) => {
  res.send('api works');
});
router.use('/api', require('./machine-category'));
router.use('/api', require('./supplier'))
module.exports = router;