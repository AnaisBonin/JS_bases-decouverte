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

jsonDatas.map(({ typeTranslation }) => {
  let newLi = document.createElement('li');
  let articleName = document.createTextNode(typeTranslation);
  newLi.appendChild(articleName);

  return targetDiv.insertAdjacentElement('beforeend', newLi);
});

///
