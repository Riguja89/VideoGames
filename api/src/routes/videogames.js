const { json } = require('body-parser');
const { Router } = require('express');
const {Videogame, VideogameGenre,Genre,VideogamePlatform,Platform}=require('../db.js');
const {Op}=require('sequelize')
const axios=require ('axios');
const router = Router();
const {API_KEY} = process.env;
router.get('/',async (req, res, next)=>{
    let {name}=req.query;
    let videogamesDb=[]
    let videogamesApi=[];
    try {
       
        if(name){
            videogamesApi[0]=await axios.get('https://api.rawg.io/api/games?key='+API_KEY+'&search='+name);
            videogamesDb= await Videogame.findAll({
                include: [Genre,Platform],
                where:{
                     name:{
                    [Op.iLike]:"%"+name+"%"
                }
            }
               
            });  
        }else{

        videogamesDb= await Videogame.findAll({include: [Genre,Platform]});
        videogamesApi[0]=await axios.get('https://api.rawg.io/api/games?key='+API_KEY);
        for(let i=2;i<=5;i++){
            videogamesApi.push(await axios.get('https://api.rawg.io/api/games?key='+API_KEY+'&page='+i));
        }
    }
        Promise.all([...videogamesApi,...videogamesDb]).then(resu=>{
           var VideoGameFiltered=videogamesDb;
            videogamesApi.forEach(element=>{
                VideoGameFiltered=[...VideoGameFiltered,...element.data.results.map( element2=>{        
                     return {
                    id: element2.id,
                    name: element2.name,
                    image:element2.background_image,
                    description:"",
                    released: element2.released,
                    rating: element2.rating,
                    platforms: element2.platforms,
                    genres:element2.genres
                } 
            })

            ]});
           // console.log( VideoGameFiltered);
            res.json(VideoGameFiltered)
        });
    
        
             
    } catch (error) {
        next(error);
    }
 
})
router.get('/:id',async(req, res, next)=>{
    const id=req.params.id
    let game, game2;
 
    try {
        if(typeof id==='string' && id.length>9){
            game2 = await Videogame.findAll({
                include:[Genre,Platform],
                where:{id:id}
            })
            
          game=game2[0];
          if(game.length===0)game.name=null;

        }else{
            game=await axios.get('https://api.rawg.io/api/games/'+id+'?key='+API_KEY);
            game=game.data;
            game={
                id: game.id,
                name: game.name,
                image:game.background_image,
                description:game.description,
                released: game.released,
                rating: game.rating,
                platforms: game.platforms.map(p=>(p.platform)),
                genres:game.genres
            }
        } 
        res.json(game)

    } catch (error) {
        next(error);
    }
 

})

router.put('/',(req, res, next)=>{
    res.send('Soy put/videogame')
})

router.post('/',async(req, res, next)=>{
    var{name,image,description,released, rating, genres,platforms}=req.body;
    if(!image)image=null; if(!released)released=null; if(!rating)rating=null;
    try {
        const newVideoGame= await Videogame.create(
            {
                name,image,description,released,rating
            }
        );
        if(genres.length>0){
        const newVideogameGenre= genres.map(gen=>{
            return{
                videogameId:newVideoGame.id,
                genreId:gen
            }
        })
        await VideogameGenre.bulkCreate(newVideogameGenre)
         }
        const newVideogamePlatform=await platforms.map(plat=>{
            return{
                videogameId:newVideoGame.id,
                platformId:plat
            }
        })
        await VideogamePlatform.bulkCreate(newVideogamePlatform)
        
        res.status(201).json(await Videogame.findAll({
            include: [Genre,Platform],
            where:{
                 id:newVideoGame.id
        } 
        })
        );
    } catch (error) {
        next(error);
        res.status(500);
    }
   
})

router.delete('/',(req, res, next)=>{
    res.send('Soy delete/videogame')
})

module.exports = router;