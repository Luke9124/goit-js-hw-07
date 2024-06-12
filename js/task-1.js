const categories = document.querySelectorAll('ul#categories li.item');

console.log(`Liczba kategorii w ul#categories: ${categories.length}`);

categories.forEach(category => {
  const headerTextContent = category.querySelector('h2').textContent;
  const liItems = category.querySelectorAll('li');

  console.log(`Tekst nagłówka elementu: ${headerTextContent}`);
  console.log(`Liczba elementów w kategorii: ${liItems.length}`);
});
