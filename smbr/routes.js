const {
  AddBooksHandler,
  GetBooksHandler,
  GetIDBooksHandler,
  EditBooksHandler,
  DeleteBooksHandler
} = require('./handler')

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => {
      return 'ini halaman home'
    }
  },
  {
    method: 'POST',
    path: '/books',
    handler: AddBooksHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: GetBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: GetIDBooksHandler
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: EditBooksHandler
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: DeleteBooksHandler
  }
]

module.exports = routes
