// Generador manual nativo (Cero dependencias)

const generateOneBook = () => {
  // Simula un ID único (UUID alternativo)
  const randomId = Math.random().toString(36).substring(2, 15)
    + Math.random().toString(36).substring(2, 15);

  // Lista de nombres ficticios (Separados en varias líneas para no romper max-len)
  const titles = [
    'Harry Potter and the Code',
    'Node.js Chronicles',
    'The Clean Coder Guide',
    'Mastering Jest',
    'Express in Action',
  ];
  const randomTitle = `${titles[Math.floor(Math.random() * titles.length)]} ${Math.floor(Math.random() * 100)}`;

  // Simula un precio aleatorio entre 10 y 100
  const randomPrice = parseFloat((Math.random() * (100 - 10) + 10).toFixed(2));

  return {
    _id: randomId,
    name: randomTitle,
    price: randomPrice,
  };
};

const generateManyBooks = (size = 10) => {
  const limit = size;
  const books = [];
  for (let i = 0; i < limit; i += 1) {
    books.push(generateOneBook());
  }
  return books;
};

// Exportación tradicional CommonJS
module.exports = {
  generateOneBook,
  generateManyBooks,
};
