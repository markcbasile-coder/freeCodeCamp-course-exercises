const books = [
  {
    title: "Fourth Wing",
    authorName: "Rebecca Yarros",
    releaseYear: 2023,
  },
  {
    title: "Iron Flame",
    authorName: "Rebecca Yarros",
    releaseYear: 2023,
  },
  {
    title: "Onyx Storm",
    authorName: "Rebecca Yarros",
    releaseYear: 2025,
  },
  {
    title: "A Fate Inked in Blood",
    authorName: "Danielle L. Jensen",
    releaseYear: 2024,
  },
  {
    title: "House of Flame and Shadow",
    authorName: "Sarah J. Maas",
    releaseYear: 2024,
  },
  {
    title: "Powerful",
    authorName: "Lauren Roberts",
    releaseYear: 2024,
  },
  {
    title: "Bride",
    authorName: "Ali Hazelwood",
    releaseYear: 2024,
  },
  {
    title: "When the Moon Hatched",
    authorName: "Sarah A. Parker",
    releaseYear: 2024,
  },
];

function sortByYear(bookA, bookB) {
  let order = 0;

  if (bookA.releaseYear - bookB.releaseYear < 0) {
    order = -1;
  } else if (bookA.releaseYear - bookB.releaseYear > 0) {
    order = 1;
  } else if (bookA.releaseYear - bookB.releaseYear === 0) {
    order = 0;
  }
  return order;
}

let filteredBooks = books.filter((book) => book.releaseYear <= 2024);
console.log(filteredBooks);

filteredBooks.sort(sortByYear);
