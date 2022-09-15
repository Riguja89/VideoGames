const { Router } = require('express');
const videogamesRoute=require('./videogames');
const genresRoute=require('./genres');
const platformsRoute=require('./platforms')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames',videogamesRoute);
router.use('/genres',genresRoute);
router.use('/platforms',platformsRoute);

module.exports = router;
