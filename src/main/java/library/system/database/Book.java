package library.system.database;

import jakarta.persistence.*;

@Entity
@Table(name="books")
public class Book {
    /*@ID is the element below is the primary key*/
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false)
    private String title;

    @Column(nullable=false)
    private String author;

    @Column(unique=false)
    private String isbn;

    @Column(unique=false)
    private int publishYear;

    private String genre;


    //Contructors
    public Book(){
        // Empty constructor required by JPA
    }
    public Book(String title, String author,
                String isbn, int publishYear, String genre){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publishYear = publishYear;
        this.genre = genre;
    }

    //Getters and Setters
    public Long getId(){ return this.id; }
    public void setId(Long id){ this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public int getPublishYear() { return publishYear; }
    public void setPublishYear(Integer publishYear) { this.publishYear = publishYear; }

    public String getIsbn() { return isbn; }
    public void setIsbn(String isbn) { this.isbn = isbn; }

    public String getGenre() { return genre; }
    public void setGenre(String genre) { this.genre = genre; }
}

