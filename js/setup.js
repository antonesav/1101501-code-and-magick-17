'use strict';
var hiddenBlockSetup = document.querySelector('.setup');
hiddenBlockSetup.classList.remove('hidden');

var similarListElement = hiddenBlockSetup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var WIZARDS_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARDS_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var WIZARDS_MANTLE_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var WIZARDS_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizardsConfigures = [
  {}, {}, {}, {}
];

// Генерация имён
function concatWizardNames(arrName, arrSecondName, index) {
  var randomIndexName = Math.round(Math.random() * (arrName.length - 1));
  var randomIndexSecondName = Math.round(Math.random() * (arrSecondName.length - 1));
  wizardsConfigures[index].name = arrName[randomIndexName] + ' ' + arrSecondName[randomIndexSecondName];
  return wizardsConfigures[index].name;
}

// генерация цветов мантий
function getMantleColor(arrMantleColors, index) {
  var randomIndexMantleColor = Math.round(Math.random() * (arrMantleColors.length - 1));
  wizardsConfigures[index].coatColor = arrMantleColors[randomIndexMantleColor];
  return wizardsConfigures[index].coatColor;
}

// генерация цветов глаз
function getEyesColor(arrEyesColors, index) {
  var randomIndexEyesColor = Math.round(Math.random() * arrEyesColors.length - 1);
  wizardsConfigures[index].eyesColor = arrEyesColors[randomIndexEyesColor];
  return wizardsConfigures[index].eyesColor;
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  concatWizardNames(WIZARDS_NAMES, WIZARDS_SURNAMES, i);
  getMantleColor(WIZARDS_MANTLE_COLORS, i);
  getEyesColor(WIZARDS_EYES_COLORS, i);
  fragment.appendChild(renderWizard(wizardsConfigures[i]));
}

similarListElement.appendChild(fragment);
hiddenBlockSetup.querySelector('.setup-similar').classList.remove('hidden');
