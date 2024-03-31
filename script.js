async function searchBooks() {
  const searchInput = document.getElementById('searchInput').value;
  
  try {
    const response = await fetch(`http://example.com/api/books?search=${searchInput}`);
    const books = await response.json();

    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
      bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Description:</strong> ${book.description}</p>
      `;
      bookList.appendChild(bookCard);
    });
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}
