const { Router } = require('express');
const axios=require('axios');
const {Genre}=require('../db.js');
const {API_KEY} = process.env;
const router = Router();

router.get('/',async(req, res, next)=>{
    try {
        res.json(await Genre.findAll())
    } catch (error) {
        next(error)
    }
    
})

router.put('/',(req, res, next)=>{
    res.send('Soy put/genre')
})

router.post('/',async (req, res, next)=>{
    try {
        let genres=await axios.get('https://api.rawg.io/api/genres?key='+API_KEY+'&page_size=100');
        genres=genres.data.results.map(result=>{
            return{
                id: result.id,
                name: result.name,
                image:result.image_background
            }
        })
        
        res.json(await Genre.bulkCreate(genres));
    } catch (error) {
        next(error)
    }

})

router.delete('/',(req, res, next)=>{
    res.send('Soy delete/genre')
})


module.exports = router;