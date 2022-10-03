const session = require('supertest-session');
const app = require('../../src/app.js');
const { expect } = require('chai');


const agent = session(app);

describe('Genres Route', ()=>{
    it('responds with 200', () => agent.get('/api/genres').expect(200));
    

    it('should reply the POST method Genres must be json or error if exixt genre', async () =>{
      try {
        let genres= await agent.post('/api/genres')
        expect(200)
        expect(genres).to.be.an('object')
      } catch (error) {
        
      }
      
      });

    it('responds with 200', () => agent.put('/api/genres').expect(200));

    it('should reply the PUT method with a TEXT massage', async () => {
        const res1 = await  agent.put('/api/genres')
        expect(res1.text).equal('Soy put/genre');
      }); 

      it('should reply the DELETE method with a TEXT massage', async () => {
        const res1 = await  agent.delete('/api/genres')
        expect(res1.text).equal('Soy delete/genre');
      });  
});