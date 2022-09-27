const session = require('supertest-session');
const app = require('../../src/app.js');
const { expect } = require('chai');

const agent = session(app);

describe('Genres Route', ()=>{
    it('responds with 200', () => agent.get('/api/genres').expect(200));
    

    it('responds with 200', (done) => agent.post('/api/genres').expect(200,done()));


    it('should reply the POST method Genres must be json', async() => {
        const res = await agent.post('/api/genres').expect('Content-Type', 'application/json; charset=utf-8');
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