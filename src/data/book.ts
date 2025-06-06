export interface Book {
  year: string;
  title: string;
  role: string;
  coEditor?: string;
  publisher: string;
  publisherUrl?: string;
  bookUrl?: string;
  description?: string;
  imageUrl?: string;
}

export const bookData: Book[] = [
  {
    year: "2025",
    title: "Populism. An Introduction",
    role: "Editor",
    coEditor: "Robert A. Huber",
    publisher: "SAGE",
    bookUrl: "https://uk.sagepub.com/en-gb/eur/populism/book286771",
    description: "The first comprehensive textbook for teaching populism, emphasizing empirical research.",
    imageUrl: "/images/populism_image.jpg",
  },
  {
    year: "2025",
    title: "Gemeinderatswahlen im deutschen Mehrebenensystem. Wählerverhalten und politische Einstellungen auf kommunaler Ebene.",
    role: "Editor",
    coEditor: "Kerstin Völkl",
    publisher: "SpringerVS",
    bookUrl: "https://link.springer.com/book/10.1007/978-3-658-47548-2",
    description: "A collection of novel analyses on voter attitudes and voting behavior in local elections.",
    imageUrl: "/images/foto_springer.png",
  },
];