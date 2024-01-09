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

/// 7.3 Add type translation to every item
jsonDatas.map((item, i) => {
  const typeTranslation = typesTranslation[item.type];
  jsonDatas[i] = { ...item, typeTranslation };
});

console.log(jsonDatas);

/// 7.4 Lister les articles dans html

////// Adding / removing items - General functions
////// Adding / removing items - General functions
////// Adding / removing items - General functions
const createListItem = (content) => {
  let newLi = document.createElement('li');
  let articleName = document.createTextNode(content);
  newLi.appendChild(articleName);

  return newLi;
};

const displayList = (list, target) => {
  list.map((item) => {
    const li = createListItem(item);

    return target.insertAdjacentElement('beforeend', li);
  });
};

const clearList = (target) => {
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
};

////// Display type list

let typeListTarget = document.getElementById('articlesList');

const createTypeList = () => {
  const types = [];
  jsonDatas.map(({ typeTranslation }) => types.push(typeTranslation));

  return types;
};

const typeList = createTypeList();

displayList(typeList, typeListTarget);

//////////FILTER
//////////FILTER
//////////FILTER
//////////FILTER
/// 7.5  Au clic sur le bouton, afficher les articles du type entré

const searchButton = document.getElementById('search-type');
const checkBoxButton = document.getElementById('validate-check');

let articlesDiv = document.getElementById('found-articles');
let selectAvailableOnly = document.getElementById('available-items').checked;

let selectAllItems = !selectAvailableOnly;

const getUserFilter = () => {
  return document.getElementById('search-entry').value;
};

const filterArticles = (filter) => {
  const filteredArticles = [];

  jsonDatas.map((article) => {
    const isAvailable = article.quantity > 0;
    if (article.typeTranslation == filter) {
      console.log(' //////////////////');
      console.log(isAvailable);
      if (isAvailable || selectAllItems) {
        filteredArticles.push(article);
      }
    }
  });

  return filteredArticles;
};

const getFilteredArticles = () => {
  const filter = getUserFilter();
  const articles = filterArticles(filter);

  return articles;
};

const displayFilteredArticlesIn = (target) => {
  const filteredArticles = getFilteredArticles();

  filteredArticles.map(({ name }) => {
    const li = createListItem(name);

    return target.insertAdjacentElement('beforeend', li);
  });
};

const getCheckValue = () => {
  console.log(availableItemCheck.checked);
};

const onClick = (e) => {
  clearList(articlesDiv);
  displayFilteredArticlesIn(articlesDiv);
  e.preventDefault();
};

searchButton.addEventListener('click', onClick);

checkBoxButton.addEventListener('click', onClick);
