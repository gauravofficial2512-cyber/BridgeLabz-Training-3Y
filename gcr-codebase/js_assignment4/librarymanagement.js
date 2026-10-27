
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log("Book issued successfully");
        } else {
            console.log("Book is already issued");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log("Book returned successfully");
    }
}

let b1 = new Book("Java", "James", "101");
let b2 = new Book("Python", "Guido", "102");
let b3 = new Book("C++", "Bjarne", "103");

let arr = [b1, b2, b3];

console.log("Available Books:");
arr.filter(b => !b.isIssued).forEach(b => {
    console.log(b.title, b.author, b.isbn);
});

let isbn = "102";
let b = arr.find(b => b.isbn === isbn);

if (b) {
    b.issueBook();
} else {
    console.log("Book not found");
}

console.log("Available Books After Issue:");
arr.filter(b => !b.isIssued).forEach(b => {
    console.log(b.title, b.isbn);
});
