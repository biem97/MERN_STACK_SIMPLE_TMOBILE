const router = require('express').Router();
const Data = require("../../models/Data");


router.post("/submit", (req, res) => {
    // Data submission
    const submitData = new Data ({
        name: req.body.name,
        voice: req.body.voice,
        bts: req.body.bts,
        revenue: req.body.revenue,
        acc: req.body.acc,
        voicegoal: req.body.voicegoal,
        btsgoal: req.body.btsgoal,
        accgoal: req.body.accgoal,
        multiplier: req.body.multiplier,
        pre: req.body.pre,
        sim3: req.body.sim3,
        smart7: req.body.smart7,
        super11: req.body.super11,
        btsact: req.body.btsact,
        actrevenue: req.body.actrevenue,
        mpr: req.body.mpr,
        uso3: req.body.uso3,
        uso7: req.body.uso7,
        ua: req.body.ua,
        accessories: req.body.accessories,
        });
    
        
    submitData
    .save()   
    .then(data => res.json(data))
    .catch(err => console.log(err));
  });



module.exports = router;