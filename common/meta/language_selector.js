function toggleLanguage() {
  var button = document.getElementById("language-toggle");
  var language = document.getElementById("language");

  if (button.classList.contains("active")) {
    // Switch to English
    button.classList.remove("active");
    button.children[0].textContent = "EN";
    button.children[1].textContent = "FR";
    language.textContent = "English";
  } else {
    // Switch to French
    button.classList.add("active");
    button.children[0].textContent = "FR";
    button.children[1].textContent = "EN";
    language.textContent = "Français";
  }
}
