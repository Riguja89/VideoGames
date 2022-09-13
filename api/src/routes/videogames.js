const { json } = require('body-parser');
const { Router } = require('express');
const {OP, Videogame}=require('../db.js');
const axios=require ('axios');
const router = Router();
const {API_KEY} = process.env;
router.get('/',async (req, res, next)=>{
    try {
        const videogamesDb= await Videogame.findAll({});
        const videogamesApi=[];
        videogamesApi[0]=await axios.get('https://api.rawg.io/api/games?key='+API_KEY);
        for(let i=2;i<=5;i++){
            videogamesApi.push(await axios.get('https://api.rawg.io/api/games?key='+API_KEY+'&page='+i));
        }
        
        Promise.all(videogamesApi).then(resu=>{
           var VideoGameFiltered=[]
            videogamesApi.forEach(element=>{
                VideoGameFiltered=[...VideoGameFiltered,...element.data.results.map( element2=>{               
                     return {
                    id: element2.id,
                    name: element2.name,
                    image:element2.background_image,
                    description:"",
                    released: element2.released,
                    rating: element2.rating,
                    platforms: element2.platforms
                }
            })

            ]});
            console.log( VideoGameFiltered);
            res.json(VideoGameFiltered)
        });
    
        
             
    } catch (error) {
        next(error);
    }
 
})

router.put('/',(req, res, next)=>{
    res.send('Soy put/videogame')
})

router.post('/',async(req, res, next)=>{
    const{name, description,released, rating}=req.body;
    try {
        const newVideoGame= await Videogame.create(
            {
                name, description,released, rating
            }
        );
        res.status(201).json(newVideoGame);
    } catch (error) {
        next(error);
    }
   
})

router.delete('/',(req, res, next)=>{
    res.send('Soy delete/videogame')
})

module.exports = router;