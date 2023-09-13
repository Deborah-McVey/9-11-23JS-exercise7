/* Exercise #7
Objective: Integrate multiple concepts: classes, methods, and private fields.

Instructions:

As a challenge, design a Library class. This class should be able to store book objects.
For book objects, you should have a Book class. This class should have private fields for ISBN and public fields like title, author, and yearPublished.
The Library should feature methods that allow a user to add a book, remove a book, and list all books.
Implement this system and run a series of operations, such as adding a book, listing books, etc. */

class Library {
    book(isbn, title, author, yearPublished) {
        this.#isbn = isbn;
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }
}

get book() {
    return this.title + this.author + this.yearPublished;
}

set addBook(book) {
    [this.title, this.author, this.yearPublished] = book;
}

removeBook(bookTitle) {
    for (let i = 0; i < this.books.length; index++) {
      const book = this.books[i];
      if (book.title == bookTitle) {
        this.books.splice(i);
      }
    }
  }

  listAllBooks() {
    for (const book of this.books) {
      console.log(`${book.title} by ${book.author} published in ${book.yearPublished}`)
    }
  }

const book = new entry('978-3-16-148410-0', 'Rivers', 'Jeffy Waters', 1987);
const book1 = new entry('979-3-16-148410-0', 'Angles', 'Angie Bronstein', 1802);
const book2 = new entry('984-3-16-148410-0', 'Icecream is Great!', 'Bambi Grayson', 1991);
const book3 = new entry('928-3-16-148410-0', 'But Then Again!', 'India Latham', 1955);

book.entry();
book.entry = ['918-3-16-148410-0', 'Go-Go', 'Yancy McGreer', 1975];
  
   
  
    
  
  
  