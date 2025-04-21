document.addEventListener("DOMContentLoaded", () => {
  const langSwitchButtons = document.querySelectorAll(".lang-switch");
  const translatableElements = document.querySelectorAll(
    "[data-lang-en], [data-lang-de]"
  );
  const htmlElement = document.documentElement; // Get the <html> element

  const setLanguage = (lang) => {
    // Update text content
    translatableElements.forEach((el) => {
      // Construct the correct camelCase property name
      const propertyName =
        "lang" + lang.charAt(0).toUpperCase() + lang.slice(1); // Creates 'langEn' or 'langDe'
      const text = el.dataset[propertyName];

      if (text !== undefined) {
        // Use innerHTML to set the text - this worked in debugging
        el.innerHTML = text;
      }
      // Removed logging for missing text for cleaner production code
    });

    // Update html lang attribute
    htmlElement.lang = lang;

    // Update button styles
    langSwitchButtons.forEach((btn) => {
      if (btn.dataset.lang === lang) {
        btn.classList.remove("button-default-outline");
        btn.classList.add("button-primary");
      } else {
        btn.classList.remove("button-primary");
        btn.classList.add("button-default-outline");
      }
    });

    // Store preference
    localStorage.setItem("preferredLanguage", lang);
  };

  // Wrap event listener setup and initial call in a short timeout
  const initializeTranslations = () => {
    // Add event listeners to buttons
    langSwitchButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const lang = button.dataset.lang;
        setLanguage(lang);
      });
    });

    // Set initial language on page load
    const preferredLanguage = localStorage.getItem("preferredLanguage");
    const initialLang =
      preferredLanguage === "en" || preferredLanguage === "de"
        ? preferredLanguage
        : "en";
    // Removed initial language check log
    setLanguage(initialLang);
  };

  // Execute after a short delay (e.g., 100 milliseconds)
  setTimeout(initializeTranslations, 100);
});
