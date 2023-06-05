
const books = [
    {
        title: "Book 1",
        author: "Author 1",
        year: 2020,
        image: "./images/book1.jpg"
    },
    {
        title: "Book 2",
        author: "Author 2",
        year: 2018,
        image: "./images/book2.jpeg"
    },
    {
        title: "Book 3",
        author: "Author 3",
        year: 2023,
        image: "./images/book3.jpeg"
    },
    {
        title: "Book 4",
        author: "Author 4",
        year: 2001,
        image: "./images/book4.jpeg"
    },
    {
        title: "Book 5",
        author: "Author 5",
        year: 1999,
        image: "./images/book5.webp"
    },
    {
        title: "Book 6",
        author: "Author 6",
        year: 2023,
        image: "./images/book6.png"
    },
    {
        title: "Book 7",
        author: "Author 7",
        year: 2014,
        image: "./images/book7.png"
    },
    {
        title: "Book 8",
        author: "Author 8",
        year: 2018,
        image: "./images/book8.jpeg"
    },
    {
        title: "Book 9",
        author: "Author 9",
        year: 2017,
        image: "./images/book9.webp"
    },
    {
        title: "Book 10",
        author: "Author 10",
        year: 2022,
        image: "./images/book10.jpeg"
    },
    {
        title: "Book 11",
        author: "Author 11",
        year: 2021,
        image: "./images/book11.jpeg"
    },
    {
        title: "Book 12",
        author: "Author 12",
        year: 2020,
        image: "./images/book12.jpeg"
    },
    {
        title: "Book 13",
        author: "Author 13",
        year: 2015,
        image: "./images/book13.webp"
    },
    {
        title: "Book 14",
        author: "Author 14",
        year: 2023,
        image: "./images/book14.webp"
    },
    {
        title: "Book 15",
        author: "Author 15",
        year: 2003,
        image: "./images/book15.jpeg"
    },
    {
        title: "Book 16",
        author: "Author 16",
        year: 2012,
        image: "./images/book2.jpeg"
    },
  
];

const booksPerPage = 10;
let currentPage = 1;
const totalPages = Math.ceil(books.length / booksPerPage);


function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";

    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;

    for (let i = startIndex; i < endIndex && i < books.length; i++) {
        const book = books[i];
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        
        const bookImage = document.createElement("img");
        bookImage.src = book.image;
        bookElement.appendChild(bookImage);
        bookElement.classList.add("list");

        const title = document.createElement("h3");
        title.textContent = book.title;
        bookElement.appendChild(title);

        const author = document.createElement("p");
        author.textContent = "Author: " + book.author;
        bookElement.appendChild(author);

        const year = document.createElement("p");
        year.textContent = "Year: " + book.year;
        bookElement.appendChild(year);

        bookList.appendChild(bookElement);
    }

    updatePagination();
}


function updatePagination() {
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}


function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayBooks();
    }
}


function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        displayBooks();
    }
}


function sortBooks() {
    const sortBy = document.getElementById("sort").value;
    
    books.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });

    currentPage = 1;
    displayBooks();
}


displayBooks();