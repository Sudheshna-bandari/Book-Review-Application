const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Fiction', description: 'Description of Book 1' },
  { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Non-Fiction', description: 'Description of Book 2' },
  // Add more books as needed
];

app.use(express.json());

app.get('/api/books', (req, res) => {
  const searchTerm = req.query.search.toLowerCase();

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm) ||
    book.genre.toLowerCase().includes(searchTerm)
  );

  res.json(filteredBooks);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
