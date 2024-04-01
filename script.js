document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
  document.getElementById('searchInput').addEventListener('input', searchBooks);
});

async function fetchBooks() {
  try {
    const response = await fetch('https://www.dbooks.org/api/recent');
    const data = await response.json();
    displayBooks(data.books);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

function displayBooks(books) {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  let currentRow;
  books.forEach((book, index) => {
    if (index % 3 === 0) {
      currentRow = document.createElement('div');
      currentRow.classList.add('book-row');
      bookList.appendChild(currentRow);
    }

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h2>${book.title}</h2>
      <img src="${book.image}" alt="${book.title}" />
      <p><strong>Authors:</strong> ${book.authors}</p>
      <p><strong>Description:</strong> ${book.subtitle}</p>
    `;
    currentRow.appendChild(bookCard);
  });
}

function searchBooks() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase().replace(/\s+/g, '');
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().replace(/\s+/g, '').includes(searchInput) ||
    book.authors.toLowerCase().replace(/\s+/g, '').includes(searchInput) ||
    book.genre.toLowerCase().replace(/\s+/g, '').includes(searchInput)
  );
  displayBooks(filteredBooks);
}
