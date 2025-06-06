import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Book } from "@/data/book";

export function BookEntry({
  book,
}: {
  book: Book;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {book.imageUrl && (
        <div className="w-full sm:w-1/4 min-w-[160px] relative">
          <Image
            src={book.imageUrl}
            alt={book.title}
            width={160}
            height={200}
            className="rounded-lg transition-all duration-300"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <div className="flex flex-row gap-4 items-center mb-2">
          <p className="text-xs text-zinc-500">
           {book.publisher} <b>&middot;</b> {book.year}
          </p>
        </div>
        <h3 className="font-serif text-md mb-3">{book.title}</h3>
        <p className="text-sm text-zinc-600 mb-4">
          {book.role}{book.coEditor && ` (with ${book.coEditor})`}
        </p>
        {book.description && (
          <div className="mb-4">
            <p className="text-sm italic text-zinc-600">
              {book.description}
            </p>
          </div>
        )}
        <div className="flex flex-row gap-6">
          {book.bookUrl && (
            <a
              href={book.bookUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Book</span>
            </a>
          )}
          {book.publisherUrl && (
            <a
              href={book.publisherUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Publisher</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}