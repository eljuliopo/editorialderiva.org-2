export function parseAuthors(authors) {
  return authors
    .map((author, index) =>
      index > 0
        ? index === authors.length - 1
          ? " y " + author.toUpperCase()
          : ", " + author.toUpperCase()
        : author.toUpperCase()
    )
    .join("")
}
