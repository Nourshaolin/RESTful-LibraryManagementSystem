
function fetchBooksCallback(success, error) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/api/books");
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            success(data);
        } else {
            error("Error: " + xhr.status);
        }
    };
    xhr.onerror = function () {
        error("Request failed");
    };
    xhr.send();
}


function displayBooks(books) {
    const container = document.getElementById("book-list");
    container.innerHTML = ""; // Clear previous content

    if (books.length === 0) {
        container.innerHTML = "<p>No books available.</p>";
        return;
    }

    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.style.border = "1px solid #ccc";
        bookItem.style.margin = "10px";
        bookItem.style.padding = "10px";
        bookItem.style.borderRadius = "8px";
        bookItem.innerHTML = `
            <strong>Title:</strong> ${book.title} <br>
            <strong>Author:</strong> ${book.author} <br>
            <strong>ISBN:</strong> ${book.isbn} <br>
            <strong>Genre:</strong> ${book.genre}
        `;
        container.appendChild(bookItem);
    });
}

function getBooksWithCallback() {
    fetchBooksCallback(
        (data) => displayBooks(data),
        (err) => alert("Error: " + err)
    );
}

fetchBooksCallback((books) => {
    if (books.length === 0) {
        alert("No books to fetch.");
        return;
    }

    displayBooks(books); // ← add this line to show all books

    const firstBookId = books[0].id;

    fetchBookById(firstBookId, (err, book) => {
        if (err) {
            alert("Error fetching book by ID");
        } else {
            alert("Callback Hell: First book title is " + book.title);
        }
    });

}, (err) => alert("Error: " + err));


function fetchBooksPromise() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/api/books");
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject("Fetch failed with status " + xhr.status);
            }
        };
        xhr.onerror = function () {
            reject("Request error");
        };
        xhr.send();
    });
}

function getBooksWithPromise() {
    fetchBooksPromise()
        .then(data => displayBooks(data))
        .catch(err => alert("Error: " + err));
}

async function getBooksWithAsyncAwait() {
    try {
        const response = await fetch("http://localhost:8080/api/books");
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        const data = await response.json();
        displayBooks(data);
    } catch (error) {
        alert("Error: " + error.message);
    }
}

function fetchBookById(id, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:8080/api/books/${id}`);
    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback("Book not found", null);
        }
    };
    xhr.onerror = function () {
        callback("Request failed", null);
    };
    xhr.send();
}

function getBooksWithCallbackHell() {
    fetchBooksCallback((books) => {
        if (books.length === 0) {
            alert("No books to fetch.");
            return;
        }

        // Step 1: display all books
        displayBooks(books);

        // Step 2: take first book and get more info using another nested callback
        const firstBookId = books[0].id;

        fetchBookById(firstBookId, (err, book) => {
            if (err) {
                alert("Error fetching book by ID: " + err);
            } else {
                alert("Callback Hell: First book title is \"" + book.title + "\"");
            }
        });

    }, (err) => alert("Error in initial fetch: " + err));
}


