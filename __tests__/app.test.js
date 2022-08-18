const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');


describe('backend-express-template routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.Authors.bulkCreate([
        {
          firstName: 'Kelly',
          lastName: 'Link',
          yearOfBirth: 1969,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'F. Scott',
          lastName: 'Fitzgerald',
          yearOfBirth: 1896,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Samantha',
          lastName: 'Shannon',
          yearOfBirth: 1991,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      await db.Books.bulkCreate([
        {
          title: 'Pretty Monsters',
          published: 2003,
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Great Gatsby',
          published: 1925,
          author_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Priory of the Orange Tree',
          published: 2019,
          author_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  });

  
  afterAll(async () => {
    await db.sequelize.close();
  });
  
  it('#GET /api/v1/books should return a list of books', async () => {
    const res = await request(app).get('/api/v1/books');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(3);
    expect(res.body[0]).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      published: expect.any(Number),
      author_id: expect.any(Number),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
  
  it('#GET /api/v1/authors should return a list of authors', async () => {
    const res = await request(app).get('/api/v1/authors');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(3);
    expect(res.body[0]).toEqual({
      id: expect.any(Number),
      firstName: expect.any(String),
      lastName: expect.any(String),
      yearOfBirth: expect.any(Number),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });

});
