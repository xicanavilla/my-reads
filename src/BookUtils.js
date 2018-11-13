export const sortAllBooks = (list) => {
  const newList = list.sort(function (a, b) {
    const titleA = a
      .title
      .toUpperCase();
    const titleB = b
      .title
      .toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  })

  return newList;
}

export const mergeShelfSearch = (shelf, search) => {
  // check if book already exists in the shelf
  const hashTable = {};
  shelf.forEach(book => hashTable[book.id] = book.shelf);

  search.forEach(book => {
    book.shelf = hashTable[book.id] || "none";
  });

  return search;
}
