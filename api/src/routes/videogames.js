const { Router } = require('express');

const router = Router();
router.get('/',(req, res, next)=>{
    res.send('Soy get/videogame')
})

router.put('/',(req, res, next)=>{
    res.send('Soy out/videogame')
})

router.post('/',(req, res, next)=>{
    res.send('Soy post/videogame')
})

router.delete('/',(req, res, next)=>{
    res.send('Soy delete/videogame')
})

module.exports = router;