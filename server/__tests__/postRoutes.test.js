import request from "supertest";
import app from "../app";


describe('GET /api/posts', () => {
    test('Should return posts from database', async () => {
        const response = await request(app).get('/api/posts')

        const responseBody = JSON.parse(response.text)
        console.log(responseBody)

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
    })
})