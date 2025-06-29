# REST Library Management System
A simple RESTful API for managing a library system using Spring Boot, Spring Data JPA, and an H2 in-memory database.

## Features
→ Add new books to the library.<br>
→ Retrieve all books.<br>
→ Retrieve a specific book by ID.<br>
→ Update book information.<br>
→ Delete books.<br>
→ Search books by author, title, or genre.<br>

## Tech Stack
→ Java 23<br>
→ Spring Boot 3.5.3<br>
→ Spring Data JPA<br>
→ H2 Database<br>
→ Postman for API testing<br>

## Project Structure

ProjectFolder<br>
└──src<br>
   ├──main<br>
   │     └──java (source)<br>
   │        └── library.system<br>
   │            ├── controller<br>
   │            │   └── BookController.java<br>
   │            ├── database<br>
   │            │   ├── Book.java<br>
   │            │   └── BookRepository.java<br>
   │            └── RestLibrarySystem.java<br>
   └──pom.xml<br>

## Running the Project
→ Clone the repository:<br>
git clone `https://github.com/Nourshaolin/RESTful-LibraryManagementSystem.git`<br>

→ Open the project in your IDE (Intellj for my case).<br>
→ Run the RestLibrarySystem main class.<br>
→ The server will start at: `http://localhost:8080`<br>

## API Endpoints
→ Method	Endpoint	Description<br>
→ `GET`	/api/books	Get all books<br>
→ `GET`	/api/books/{id}	Get a book by ID<br>
→ `POST`	/api/books	Create a new book<br>
→ `PUT`	/api/books/{id}	Update an existing book<br>
→ `DELETE`	/api/books/{id}	Delete a book<br>
→ `GET`	/api/books/search	Search books (by author, title, or genre)<br>

## Example: 
→ POST a Book<br>
  URL: http://localhost:8080/api/books<br>
  Method: `POST`<br>
  Headers:<br>
    Content-Type: application/json<br>
  Body:<br>
  
  {<br>
    `"title"`: "Clean Code",<br>
    `"author"`: "Robert C. Martin",<br>
    `"isbn"`: "978-0132350884",<br>
    `"publishYear"`: 2008,<br>
    `"genre"`: "Programming"<br>
  }<br>
  
## Testing
Use Postman to test all the API endpoints.<br>

## Database
The project uses an in-memory H2 database (all data is lost when the server stops).<br>
