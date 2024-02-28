import request from 'supertest';
import server from '../../config/server.mjs';

describe("Solicitacoes controller tests", () => {
    beforeAll(async ()  => {
    console.log('Before all');
    });

    beforeEach(async () => {
    console.log('Before each');
    });

    afterAll(async () => {
    console.log('after all');
    });

    afterEach(async () => {
    console.log('after each');
    });

    it("should sum 2 numbers", () => {
        expect(1+1).toBe(2);
    })

    it("in GET route /solicitacoes should return all solicitacoes", async () => {
        const response = await request(server).get('/solicitacoes');
    })

});