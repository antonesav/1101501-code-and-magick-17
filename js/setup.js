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

var wizardsConfigures = [];
var parametersWizard = {};

// Генерация рандомного числа
function getRandomIndex(someArray) {
  return Math.round(Math.random() * (someArray.length - 1));
}

// Генерация имён
function concatWizardNames(arrName, arrSecondName) {
  parametersWizard.name = arrName[getRandomIndex(arrName)] + ' ' + arrSecondName[getRandomIndex(arrSecondName)];
  return parametersWizard.name;
}

// генерация цветов мантий
function getMantleColor(arrMantleColors) {
  parametersWizard.coatColor = arrMantleColors[getRandomIndex(arrMantleColors)];
  return parametersWizard.coatColor;
}

// генерация цветов глаз
function getEyesColor(arrEyesColors) {
  parametersWizard.eyesColor = arrEyesColors[getRandomIndex(arrEyesColors)];
  return parametersWizard.eyesColor;
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
  concatWizardNames(WIZARDS_NAMES, WIZARDS_SURNAMES);
  getMantleColor(WIZARDS_MANTLE_COLORS);
  getEyesColor(WIZARDS_EYES_COLORS);
  wizardsConfigures.push(parametersWizard);
  fragment.appendChild(renderWizard(wizardsConfigures[i]));
}

similarListElement.appendChild(fragment);
hiddenBlockSetup.querySelector('.setup-similar').classList.remove('hidden');
