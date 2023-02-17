function changeLanguage() {
  const languageSelect = document.getElementById("language-select");
  const language = languageSelect.value;

  const cvLink = document.querySelector(
    'a[href="/html/cv_fr.html"], a[href="/html/cv_en.html"]'
  );
  const publicationLink = document.querySelectorAll(
    'a[href="/html/publication_fr.html"], a[href="/html/publication_en.html"]'
  );
  const indexLink = document.querySelectorAll(
    'a[href="index_fr.html"], a[href="index_en.html"]'
  );

  if (language === "fr") {
    cvLink.href = "/html/cv_fr.html";
    publicationLink.forEach((link) => (link.href = "/html/publication_fr.html"));
    indexLink.forEach((link) => (link.href = "index_fr.html"));
    localStorage.setItem("selectedLanguage", "fr");
  } else {
    cvLink.href = "/html/cv_en.html";
    publicationLink.forEach((link) => (link.href = "/html/publication_en.html"));
    indexLink.forEach((link) => (link.href = "index_en.html"));
    localStorage.setItem("selectedLanguage", "en");
  }
}

window.addEventListener("load", () => {
  const selectedLanguage = localStorage.getItem("selectedLanguage");
  console.log(selectedLanguage)
  if (selectedLanguage) {
    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
      languageSelect.value = selectedLanguage;
      changeLanguage();
    }
  }
});
