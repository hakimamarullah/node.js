/* eslint-disable eqeqeq */
/* eslint-disable no-else-return */
const { nanoid } = require('nanoid');
const books = require('./books');

const addBooks = (request, h) => {
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    insertedAt,
    updatedAt,
    finished,
  };

  if(name != undefined && readPage <= pageCount) {
    books.push(newBook);
  
    const isSuccess = books.filter((book) => book.id === id).length > 0;

    if (isSuccess) {
      const response = h.response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: id,
        },
      });
      response.code(201);
      return response;
    }
  } else if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  } else {
    const response = h.response({
      status: 'fail',
      message: 'Buku gagal ditambahkan.',
    });
    response.code(500);
    return response;
  }
};

const getAllBooks = ()=>({
  status: 'success',
  data: {
    books: books.map((book) => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    })),
  },
});

const getBookById = (request, h)=>{
  const {id} = request.params;
  const book = books.filter((book)=> book.id === id)[0];

  if (book != undefined) {
    return {
      status: 'success',
      data: {
        book,
      }
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

const editBookById = (request, h)=>{
  const {id} = request.params;
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;
  const idx = books.findIndex((book)=> book.id === id);
  const updatedAt = new Date().toISOString();
  const finished = pageCount === readPage;
  const isValid = idx != -1 && name != undefined && readPage <= pageCount;

  if (isValid) {
    books[idx] = {
      ...books[idx],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
      finished
    };

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  } else if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  } else {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
    response.code(404);
    return response;
  }
};

const deleteBookById = (request, h)=>{
  const {id} = request.params;
  const index = books.findIndex((book)=> book.id === id);

  if (index!=-1) {
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

const getBookByName = (request, h)=>{
  const {name} = request.query;
  const book = books.filter((b)=> b.name.toLowerCase().includes(name));

  if (book != undefined) {
    return {
      status: 'success',
      data:{
        book,
      },
    };
  }
  const response = h.response({
    status: 'fail',
    message: `Buku ${name} tidak ditemukan`,
  });
  response.code(404);
  return response;
};
module.exports = {
  addBooks,
  getAllBooks,
  getBookById,
  editBookById,
  deleteBookById,
  getBookByName,
};
