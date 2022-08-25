import rules from "../utilites/validation-rules.js";

(() => {
  const forms = document.querySelectorAll("form");
  if (!forms.length) return;

  forms.forEach(form => {
    const button = form.querySelector("button[type=submit]");
    const inputs = form.querySelectorAll("input[required]");
    if (!inputs.length) return;

    const checkInput = (input) => {
      const check = rules[input.type];
      const result = check(input.value);
      if (typeof result == "string") {
        input.setCustomValidity(result);
        input.reportValidity();
        input.classList.add("form-page__form-input--invalid");
      } else {
        input.classList.remove("form-page__form-input--invalid");
        input.setCustomValidity("");
      };
    };

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInput(input);
      });
    });

    button.addEventListener("click", (evt) => {
      evt.preventDefault();
      inputs.forEach(input => {
        checkInput(input);
      });

      if (form.checkValidity()) {
        form.submit();
      };
    });
  });
})();
