const { generateManyBooks } = require('../fakes/book.fake');
const BookService = require('./books.service');

const mockGetAll = jest.fn();
/* const MongoLibStub = {
  // getAll: () => [...fakeBooks],
  getAll: mockGetAll,
  create: () => {},

}; */

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks();
  });
  describe('test for getBooks', () => {
    test('shoult retun a list of books', async () => {
    // arrange
      const fakeBooks = generateManyBooks();
      mockGetAll.mockResolvedValue(fakeBooks);
      // act
      const books = await service.getBooks({});
      console.log(books);
      // assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
    test('shoult retun a list of books', async () => {
    // arrange
    // act
      const fakeBooks = generateManyBooks(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});
      console.log(books);
      // assert
      // expect(books[0].name).toEqual(fakeBooks[0]);
    });
  });
});
