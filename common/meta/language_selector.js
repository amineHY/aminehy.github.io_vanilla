function toggleLanguage() {
  const elements = document.querySelectorAll('[lang]');
  elements.forEach((el) => {
    if (el.dataset.lang === 'fr') {
      el.dataset.lang = 'en';
      el.textContent = 'Hello!';
    } else if (el.dataset.lang === 'en') {
      el.dataset.lang = 'fr';
      el.textContent = 'Bonjour!';
    }
  });
}

const toggleButton = document.getElementById('language-toggle');
toggleButton.addEventListener('click', toggleLanguage);
