require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME,URL_DATABASE
} = process.env;

//const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
// postgres://videogames_uun8_user:xBpZZ5vuTM8HXycadPL3fHgsyza8a7xx@dpg-cd24oeaen0hm1tsbg0n0-a.ohio-postgres.render.com/videogames_uun8
// postgres://videogames_uun8_user:xBpZZ5vuTM8HXycadPL3fHgsyza8a7xx@dpg-cd24oeaen0hm1tsbg0n0-a/videogames_uun8
logging: false, // set to console.log to see the raw SQL queries
native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Videogame,Genre,Platform } = sequelize.models;
Videogame.belongsToMany(Genre,{through: "VideogameGenre"})
Genre.belongsToMany(Videogame,{through: "VideogameGenre"})

Videogame.belongsToMany(Platform,{through: "VideogamePlatform"})
Platform.belongsToMany(Videogame,{through: "VideogamePlatform"})
// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
