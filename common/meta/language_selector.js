function changeLanguage() {
  const languageSelect = document.getElementById("language-select");
  const language = languageSelect.value;

  const cvLink = document.querySelector(
    'a[href="/html/cv_fr.html"], a[href="/html/cv_en.html"]'
  );
  const publicationLink = document.querySelector(
    'a[href="/html/publication_fr.html"], a[href="/html/publication_en.html"]'
  );
  const indexLink = document.querySelector(
    'a[href="index_fr.html"], a[href="index_en.html"]'
  );

  console.log(language, cvLink, publicationLink, indexLink);
  if (language === "fr") {
    cvLink.href = "/html/cv_fr.html";
    publicationLink.href = "/html/publication_fr.html";
    indexLink.href = "index_fr.html";
  } else {
    cvLink.href = "/html/cv_en.html";
    publicationLink.href = "/html/publication_en.html";
    indexLink.href = "index_en.html";
  }
}
