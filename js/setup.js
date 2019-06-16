'use strict';
// Окно настройки персонажа
var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;
var setupWindow = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = setupWindow.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');

function popupEscPressHandler(evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    closePopup();
  }
}

function openPopup() {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
}

function closePopup() {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHandler);
}

// Показываем окно настройки
setupOpenButton.addEventListener('click', function () {
  openPopup();

});

// Показываем окно настройки через Enter
setupOpenButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    openPopup();
  }
});

// Скрываем окно настройки
setupCloseButton.addEventListener('click', function () {
  closePopup();
});

// Скрываем окно настройка через Enter
setupCloseButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    closePopup();
  }
});
// Кастомный тест ошибок
var customErrorValidity = {
  tooShort: 'Имя должно состоять минимум из 2-х символов',
  tooLong: 'Имя не должно превышать 25-ти символов',
  valueMissing: 'Обязательное поле'
};
// Изменяем кастомный тест ошибок,если они допущены при валидации
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity(customErrorValidity.tooShort);
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity(customErrorValidity.tooLong);
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity(customErrorValidity.valueMissing);
  } else {
    userNameInput.setCustomValidity('');
  }
});

// Если фокус на user-name input, окно не закрывается
userNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', popupEscPressHandler);
});

// Если фокус на user-name input потерян, окно не закрывается
userNameInput.addEventListener('blur', function () {
  document.addEventListener('keydown', popupEscPressHandler);
});

// Блок волшебников
var similarListElement = setupWindow.querySelector('.setup-similar-list');
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

var WIZARD_FIREBAL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
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

// генерация цвета фаербола
function getFireballColor(arrFireballColors) {
  return arrFireballColors[getRandomIndex(arrFireballColors)];
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
setupWindow.querySelector('.setup-similar').classList.remove('hidden');

// Блок главного волшебника
var wizardPlayer = document.querySelector('.setup-wizard');
var setupPlayer = document.querySelector('.setup-player');
var wizardPlayerCoat = wizardPlayer.querySelector('.wizard-coat');
var wizardPlayerEyes = wizardPlayer.querySelector('.wizard-eyes');
var wizardPlayerFireball = setupPlayer.querySelector('.setup-fireball-wrap');

function getColorItem(evt, colorItem, attribute) {
  var target = evt.target;
  var color = colorItem;
  target.style.fill = color;
  setupPlayer.querySelector(attribute).setAttribute('value', color);
}

// Изменение цвета мантии при клике,и передача в input.value
wizardPlayerCoat.addEventListener('click', function (evt) {
  getColorItem(evt, getMantleColor(WIZARDS_MANTLE_COLORS), '[name="coat-color"]');
});

// Изменение цвета глаз при клике,и передача в input.value
wizardPlayerEyes.addEventListener('click', function (evt) {
  getColorItem(evt, getMantleColor(WIZARDS_MANTLE_COLORS), '[name="eyes-color"]');
});

// Изменение цвета фаербола при клике,и передача в input.value
wizardPlayerFireball.addEventListener('click', function (evt) {
  var target = evt.currentTarget;
  var fireballColor = getFireballColor(WIZARD_FIREBAL_COLOR);
  target.style.background = fireballColor;
  target.querySelector('[name="fireball-color"]').setAttribute('value', fireballColor);
}, true);
