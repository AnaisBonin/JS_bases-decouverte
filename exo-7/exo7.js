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

console.log('With type translation');
console.log(jsonDatas);

/// 7.4 Lister les articles dans html

/// \\\
////// Adding / removing items - General functions
/// \\\

const createHtmlElement = (content, el) => {
  let newEl = document.createElement(el);
  let text = document.createTextNode(content);
  newEl.appendChild(text);

  return newEl;
};

const displayList = (list, target) => {
  list.map((item) => {
    const li = createHtmlElement(item, 'li');

    return target.insertAdjacentElement('beforeend', li);
  });
};

const clearList = (target) => {
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
};

const getEl = (el) => document.getElementById(el);

/// \\\
/// Display type list
/// \\\

let typeListTarget = getEl('articlesList');

const findAllTypes = () =>
  jsonDatas.map(({ typeTranslation }) => typeTranslation);

const createTypeList = () => {
  const types = [];

  findAllTypes().map((type) => {
    const alreadyRegistered = types.find((savedType) => savedType == type);

    if (!alreadyRegistered) {
      types.push(type);
    }
  });

  return types;
};

const typeList = createTypeList();

displayList(typeList, typeListTarget);

/// 7.5  Au clic sur le bouton, afficher les articles du type entré

///Targets
let articlesDiv = getEl('found-articles');

/// \\\\
/// START \\\ Checkbox items available mecanism
/// \\\\

const checkBoxButton = getEl('validate-check');
let selectAvailableOnly = true;

const setSelectAvailableOnly = () => {
  selectAvailableOnly = getEl('available-items').checked;
};

setSelectAvailableOnly();

/// \\\\
/// END \\\ Checkbox items available mecanism
/// \\\\

/// \\\
/// START \\\ Order items by name, price, asc, dec
/// \\\

// 1. list all radiobuttons to listen to
const nameRadioButton = getEl('orderByName');
const priceRadioButton = getEl('orderByPrice');
const ascRadioButton = getEl('orderAsc');
const descRadioButton = getEl('orderDesc');

let orderByName = true;
let orderByAsc = true;

const setOrderBooleans = () => {
  orderByName = getEl('orderByName').checked;
  orderByAsc = getEl('orderAsc').checked;
};

setOrderBooleans();

// 2. create functions to order list by...

const orderListByName = (list) =>
  list.sort((a, b) =>
    orderByAsc == true
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

const orderListByPrice = (list) =>
  list.sort((a, b) =>
    orderByAsc == true ? a.price - b.price : a.price + b.price
  );

const orderProductList = (list) => {
  setOrderBooleans();
  return orderByName ? orderListByName(list) : orderListByPrice(list);
};

/// \\\
/// END \\\ Order items by name, price, asc, dec
/// \\\

/// \\\\
/// START \\\ Filter items by type
/// \\\\
const searchButton = getEl('search-type');

const getUserFilter = () => {
  return getEl('search-entry').value;
};

const filterArticles = (filter) => {
  const filteredArticles = [];
  setSelectAvailableOnly();

  jsonDatas.map((article) => {
    const isAvailable = article.quantity > 0;
    if (article.typeTranslation == filter) {
      if (isAvailable || !selectAvailableOnly) {
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

  const orderedList = orderProductList(filteredArticles);

  orderedList.map(({ name, price, quantity }) => {
    const articleContent = `${name} ///// Prix : ${price}€ - Quantite : ${quantity}`;
    const li = createHtmlElement(articleContent, 'li');

    return target.insertAdjacentElement('beforeend', li);
  });
};

const onClick = () => {
  clearList(articlesDiv);
  displayFilteredArticlesIn(articlesDiv);
};

/// \\\
/// END \\\ Filter items by type
/// \\\

/// \\\
/// START \\\ Add type options to Create a new item
/// \\\

const typeDropdown = getEl('itemType');

const addOptionToTypeSelect = (options) => {
  const content = options.map((type) => `<option> ${type} </option>`).join(' ');
  return (typeDropdown.innerHTML = content);
};

addOptionToTypeSelect(typeList);

/// \\\
/// END \\\ Add type options to Create a new item
/// \\\

/// \\\
/// \\\ EVENT Listener
/// \\\

searchButton.addEventListener('click', onClick);
checkBoxButton.addEventListener('click', onClick);

/// Radio buttons
nameRadioButton.addEventListener('click', onClick);
priceRadioButton.addEventListener('click', onClick);
ascRadioButton.addEventListener('click', onClick);
descRadioButton.addEventListener('click', onClick);
