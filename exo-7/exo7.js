console.log('exo-7');

/// 7.1 - 7.2
console.log(jsonDatas);

const types = jsonDatas.map(({ type }) => type);
console.log(types);

const typesTranslation = {
  car: 'voiture',
  house: 'maison',
  game: 'jeu',
  videoGame: 'jeux vidéo',
  show: 'concert',
};

/// 7.3
jsonDatas.map((item, i) => {
  const typeTranslation = typesTranslation[item.type];
  jsonDatas[i] = { ...item, typeTranslation };
});

console.log(jsonDatas);

/// 7.4 Lister les articles dans html

let targetDiv = document.getElementById('articlesList');

const createListItem = (content) => {
  let newLi = document.createElement('li');
  let articleName = document.createTextNode(content);
  newLi.appendChild(articleName);

  return newLi;
};

const createTypeList = () => {
  jsonDatas.map(({ typeTranslation }) => {
    const li = createListItem(typeTranslation);

    return targetDiv.insertAdjacentElement('beforeend', li);
  });
};

createTypeList();

/// 7.5  Au clic sur le bouton, afficher les articles du type entré

const searchButton = document.getElementById('search-type');
let articlesDiv = document.getElementById('found-articles');

const getUserFilter = () => {
  return document.getElementById('search-entry').value;
};

const filterArticles = (filter) => {
  const filteredArticles = [];
  jsonDatas.map((article) => {
    if (article.typeTranslation == filter) {
      filteredArticles.push(article);
    }
  });
  return filteredArticles;
};

const getFilteredArticles = () => {
  const filter = getUserFilter();
  const articles = filterArticles(filter);

  return articles;
};

const displayFilteredArticles = (target) => {
  const filteredArticles = getFilteredArticles();

  filteredArticles.map(({ name }) => {
    const li = createListItem(name);

    return target.insertAdjacentElement('beforeend', li);
  });
};

const clearList = (target) => {
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
};

const onClick = (e) => {
  clearList(articlesDiv);
  displayFilteredArticles(articlesDiv);
  e.preventDefault();
};

searchButton.addEventListener('click', onClick);
