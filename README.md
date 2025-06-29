REST Library Management System
A simple RESTful API for managing a library system using Spring Boot, Spring Data JPA, and an H2 in-memory database.

# Features
→ Add new books to the library.
→ Retrieve all books.
→ Retrieve a specific book by ID.
→ Update book information.
→ Delete books.
→ Search books by author, title, or genre.

# Tech Stack
→ Java 23
→ Spring Boot 3.5.3
→ Spring Data JPA
→ H2 Database
→ Postman for API testing

# Project Structure

ProjectFolder
└──src
   ├──main
   │     └──java (source)
   │        └── library.system
   │            ├── controller
   │            │   └── BookController.java
   │            ├── database
   │            │   ├── Book.java
   │            │   └── BookRepository.java
   │            └── RestLibrarySystem.java
   └──pom.xml

# Running the Project
→ Clone the repository:
git clone https://github.com/Nourshaolin/RESTful-LibraryManagementSystem.git

→ Open the project in your IDE (Intellj for my case).
→ Run the RestLibrarySystem main class.
→ The server will start at: http://localhost:8080

# API Endpoints
→ Method	Endpoint	Description
→ GET	/api/books	Get all books
→ GET	/api/books/{id}	Get a book by ID
→ POST	/api/books	Create a new book
→ PUT	/api/books/{id}	Update an existing book
→ DELETE	/api/books/{id}	Delete a book
→ GET	/api/books/search	Search books (by author, title, or genre)

# Example: 
→ POST a Book
  URL: http://localhost:8080/api/books
  Method: POST
  Headers:
    Content-Type: application/json
  Body:
  
  {
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "isbn": "978-0132350884",
    "publishYear": 2008,
    "genre": "Programming"
  }
  
# Testing
Use Postman to test all the API endpoints.

# Database
The project uses an in-memory H2 database (all data is lost when the server stops).
