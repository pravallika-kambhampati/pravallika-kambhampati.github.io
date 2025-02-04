import { BOOKS } from "@/data/books";
import BookCard from "@/components/BookCard";

export default function BooksPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Books I've Read</h1>

      <h2 className="mt-4 text-xl font-semibold">
        Books of {BOOKS.currentYear}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {BOOKS.booksOfTheYear.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </div>

      <h2 className="mt-6 text-xl font-semibold">All Books</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {BOOKS.allBooks.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </div>
    </div>
  );
}
