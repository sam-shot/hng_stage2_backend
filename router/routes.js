const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).send({
        status: "E dey Shake for here"
    })
})



module.exports = router