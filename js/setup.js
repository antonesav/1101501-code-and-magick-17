'use strict';
var hiddenBlockSetup = document.querySelector('.setup');
hiddenBlockSetup.classList.remove('hidden');

var similarListElement = hiddenBlockSetup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');
var WIZARD_COUNT = 4;

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

// Генерация рандомного числа
function getRandomIndex(someArray) {
  return Math.round(Math.random() * (someArray.length - 1));
}

// Генерация имён
function concatWizardNames(arrName, arrSecondName) {
  return arrName[getRandomIndex(arrName)] + ' ' + arrSecondName[getRandomIndex(arrSecondName)];
}

// генерация цветов мантий
function getMantleColor(arrMantleColors) {
  return arrMantleColors[getRandomIndex(arrMantleColors)];
}

// генерация цветов глаз
function getEyesColor(arrEyesColors) {
  return arrEyesColors[getRandomIndex(arrEyesColors)];
}

// Формируем массив волшебников
for (var i = 0; i < WIZARD_COUNT; i++) {
  wizardsConfigures.push({
    name: concatWizardNames(WIZARDS_NAMES, WIZARDS_SURNAMES),
    coatColor: getMantleColor(WIZARDS_MANTLE_COLORS),
    eyesColor: getEyesColor(WIZARDS_EYES_COLORS)
  });
}

// Отрисовка волшебника
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();

// Отрисовка волшебников из массива
for (var j = 0; j < wizardsConfigures.length; j++) {
  fragment.appendChild(renderWizard(wizardsConfigures[j]));
}

similarListElement.appendChild(fragment);
hiddenBlockSetup.querySelector('.setup-similar').classList.remove('hidden');
