import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Book } from "./book";


export class Testdata implements InMemoryDbService {
    createDb() {
        let bookDetails: Book[] = [
            { id: 101, name: 'Angular', category: 'Angular Book', year: '2023' },
            { id: 102, name: 'Java', category: 'Java Book', year: '2024' },
            { id: 103, name: 'DSA', category: 'DSA Book', year: '2013' },
            { id: 104, name: 'DBMS', category: 'DBMS Book', year: '2020' },
            { id: 105, name: 'SpringBoot', category: 'SpringBoot Book', year: '2025' },
        ];
        return { books: bookDetails };
    }
}
