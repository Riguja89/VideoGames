const { Router } = require('express');


const router = Router();
router.get('/',(req, res, next)=>{
    res.send('Soy get/genre')
})

router.put('/',(req, res, next)=>{
    res.send('Soy put/genre')
})

router.post('/',(req, res, next)=>{
    res.send('Soy post/genre')
})

router.delete('/',(req, res, next)=>{
    res.send('Soy delete/genre')
})


module.exports = router;