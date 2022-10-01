const { Router } = require('express');
const axios=require('axios');
const {Platform}=require('../db.js');
const {API_KEY} = process.env;
const router = Router();

router.post('/',async (req, res, next)=>{
    try {
        let platforms=await axios.get('https://api.rawg.io/api/platforms?key='+API_KEY);
        platforms=platforms.data.results.map(result=>{
            return{
                id: result.id,
                name: result.name,
                image:result.image_background
            }
        })
        
        res.json(await Platform.bulkCreate(platforms));
    } catch (error) {
        next(error)
    }

})

router.get('/',async(req, res, next)=>{
    var platforms=[];
    try {
        platforms=await Platform.findAll();
        
        platforms.sort(function(a,b){
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              }
              return 0; 
        })
        res.json(platforms)
    } catch (error) {
        next(error)
    }
    
})

module.exports = router;