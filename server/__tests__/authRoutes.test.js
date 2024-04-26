import request from 'supertest';
import app from './server/app'; // Import your Express app

describe('POST /api/signup', () => {
  test('should create a new user', async () => {
    const newUser = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'Password123'
    };

    const response = await request(app)
      .post('/api/signup')
      .send(newUser);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('message', 'User registered successfully');
  });
});

describe('POST /api/login',  () => {
  test('Should sign the user in', async () => {
    const user = {
      username: 'testuser',
      password: 'Password123'
    };
  
    const response = await request(app)
      .post('/api/login')
      .send(user)
  
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Login Succesful');
  })
})
