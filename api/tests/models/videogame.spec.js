const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', async () => {
        //expect.assertions(1);
        
       try {
        await Videogame.create({description:'hola soy una description'})
        
       } catch (error) {
        //expect(error.message).toBeDefined();
        expect(error.message).to.equal('notNull Violation: videogame.name cannot be null')
        
       }})

      it('should throw an error if description is null', async() => {
       
        try {
          await Videogame.create({name: 'Super Mario Bros'})
          
         } catch (error) {
          //expect(error.message).toBeDefined();
          expect(error.message).to.equal('notNull Violation: videogame.description cannot be null')
          
         }})

         it('should Work if name and description are corrects', async() => {
       
         
            let game=await Videogame.create({name: 'Super Mario Bros', description:'hola soy una description'})
            expect(game.toJSON()).to.have.property('name','Super Mario Bros');
            expect(game.toJSON()).to.have.property('description','hola soy una description');
           })
       
  
    });
  });
});
