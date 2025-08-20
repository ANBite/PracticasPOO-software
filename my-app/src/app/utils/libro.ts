import Title from "./title-validation";
import Description from "./description-validation";
import Author from "./author-validation";

export default class Libro {
    public title: Title;
    public description: Description;
    public author: Author;

    constructor(title: Title, description: Description, author: Author) {
        this.title = title;
        this.description = description;
        this.author = author;
    }

    public static crear(title: string, description: string, author: string): Libro {
        const libro = new Libro(
            new Title(title), 
            new Description(description), 
            new Author(author));
        return libro;
    }
}