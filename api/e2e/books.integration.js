const request = require('supertest');
const { generateManyBooks } = require('../src/fakes/book.fake');

// 1. Definimos las funciones espía dentro de un objeto contenedor.
// El nombre del contenedor DEBE empezar estrictamente con la palabra "mock".
const mockMongoLib = {
  getAll: jest.fn(),
  create: jest.fn(),
};

// 2. Mockeamos el módulo mongo.lib ANTES de importar la aplicación de Express.
// Retornamos una función constructora que devuelve nuestro objeto contenedor.
jest.mock('../src/lib/mongo.lib', () => {
  return jest.fn().mockImplementation(() => mockMongoLib);
});

// 3. Ahora que el mock está preparado en memoria, importamos la aplicación de Express.
const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return list books', () => {
      const fakeBooks = generateManyBooks(3);

      // 4. Inyectamos los datos falsos directamente en el contenedor compartido
      mockMongoLib.getAll.mockResolvedValue(fakeBooks);

      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
