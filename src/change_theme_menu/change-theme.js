import menu from '../menu.json';
import galleryMenu from '../template/gallery-menu.hbs';

const markup = galleryMenu(menu);

const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', markup);

const refs = {
  checkbox: document.querySelector('.js-switch-input'),
};

refs.checkbox.addEventListener('change', handleThemeSubmit);

function handleThemeSubmit(event) {
  if (event.currentTarget.checked) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.add('ligth-theme');
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function savedTheme() {
  const saveTheme = localStorage.getItem('theme');

  if (saveTheme) {
    document.body.classList.add(saveTheme);
  }

  if (document.body.classList.value === Theme.DARK) {
    refs.checkbox.checked = true;
  }
}
savedTheme();
